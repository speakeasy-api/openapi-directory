/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class APIs {
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
   * Insurance Policy - Life
   *
   * @remarks
   * API to verify Insurance Policy - Life.
   */
  licer(
    req: operations.LicerRequestBody,
    security: operations.LicerSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.LicerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LicerRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/licer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.LicerSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...reqBodyHeaders, ...config?.headers };

    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.LicerResponse = new operations.LicerResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
      switch (true) {
        case httpRes?.status == 200:
          break;
        case httpRes?.status == 400:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer400ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer400ApplicationJSON
            );
          }
          break;
        case httpRes?.status == 401:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer401ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer401ApplicationJSON
            );
          }
          break;
        case httpRes?.status == 404:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer404ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer404ApplicationJSON
            );
          }
          break;
        case httpRes?.status == 500:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer500ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer500ApplicationJSON
            );
          }
          break;
        case httpRes?.status == 502:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer502ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer502ApplicationJSON
            );
          }
          break;
        case httpRes?.status == 503:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer503ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer503ApplicationJSON
            );
          }
          break;
        case httpRes?.status == 504:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.licer504ApplicationJSONObject = utils.objectToClass(
              httpRes?.data,
              operations.Licer504ApplicationJSON
            );
          }
          break;
      }

      return res;
    });
  }
}
