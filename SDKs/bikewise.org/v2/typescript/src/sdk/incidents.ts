/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Incidents matching parameters
 */
export class Incidents {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Paginated incidents matching parameters
   *
   * @remarks
   *
   * <p>If you’d like more detailed information about bike incidents, use this endpoint. For mapping, <code>locations</code> is probably a better bet.</p>
   *
   * <p><strong>Notes on location searching</strong>: <br />
   * - <code>proximity</code> accepts an ip address, an address, zipcode, city, or latitude,longitude - i.e. <code>70.210.133.87</code>, <code>210 NW 11th Ave, Portland, OR</code>, <code>60647</code>, <code>Chicago, IL</code>, and <code>45.521728,-122.67326</code> are all acceptable<br />
   * - <code>proximity_square</code> sets the length of the sides of the square to find matches inside of. The square is centered on the location specified by <code>proximity</code>. It defaults to 100.</p>
   *
   */
  getVersionIncidentsFormat(
    req: operations.GETVersionIncidentsFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GETVersionIncidentsFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GETVersionIncidentsFormatRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v2/incidents";

    const client: AxiosInstance = this._defaultClient;

    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GETVersionIncidentsFormatResponse =
        new operations.GETVersionIncidentsFormatResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }

  getVersionIncidentsIdFormat(
    req: operations.GETVersionIncidentsIdFormatRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GETVersionIncidentsIdFormatResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GETVersionIncidentsIdFormatRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/incidents/{id}", req);

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GETVersionIncidentsIdFormatResponse =
        new operations.GETVersionIncidentsIdFormatResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          break;
      }

      return res;
    });
  }
}
