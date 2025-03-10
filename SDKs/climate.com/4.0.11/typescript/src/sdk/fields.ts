/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Field data endpoints.
 */
export class Fields {
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
   * Retrieve list of all Fields the user has access to.
   *
   * @remarks
   * Retrieve all fields the authenticated user has access to, including fields shared with the authenticated user from other resource owners. Filter the results by field name if the `fieldName` query parameter is specified.
   * A 409 will be returned if the X-Next-Token has expired. When receiving a 409, the client should discard the X-Next-Token, discard all currently persisted fields for the user, and re-fetch fields from /fields/all.
   */
  fetchAllFields(
    req: operations.FetchAllFieldsRequest,
    security: operations.FetchAllFieldsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchAllFieldsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchAllFieldsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/fields/all";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FetchAllFieldsSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FetchAllFieldsResponse =
        new operations.FetchAllFieldsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case [200, 206].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.fields = utils.objectToClass(httpRes?.data, shared.Fields);
          }
          break;
        case httpRes?.status == 304:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.empty = utils.objectToClass(httpRes?.data);
          }
          break;
        case [400, 401, 403, 409, 429, 500, 503].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieve a specific Field by ID
   *
   * @remarks
   * Retrieve a given **Field** by ID.
   */
  fetchFieldById(
    req: operations.FetchFieldByIdRequest,
    security: operations.FetchFieldByIdSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFieldByIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFieldByIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v4/fields/{fieldId}", req);
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FetchFieldByIdSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FetchFieldByIdResponse =
        new operations.FetchFieldByIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.field = utils.objectToClass(httpRes?.data, shared.Field);
          }
          break;
        case [400, 401, 403, 404, 429, 500, 503].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
          }
          break;
      }

      return res;
    });
  }

  /**
   * Retrieve list of Fields
   *
   * @remarks
   * Retrieve list of **Fields**. Filter the results by field name if the `fieldName` query parameter is specified.
   */
  fetchFields(
    req: operations.FetchFieldsRequest,
    security: operations.FetchFieldsSecurity,
    config?: AxiosRequestConfig
  ): Promise<operations.FetchFieldsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FetchFieldsRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v4/fields";
    if (!(security instanceof utils.SpeakeasyBase)) {
      security = new operations.FetchFieldsSecurity(security);
    }
    const client: AxiosInstance = utils.createSecurityClient(
      this._defaultClient,
      security
    );

    const headers = { ...utils.getHeadersFromRequest(req), ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);

    const r = client.request({
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.FetchFieldsResponse =
        new operations.FetchFieldsResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
          headers: utils.getHeadersFromResponse(httpRes.headers),
        });
      switch (true) {
        case [200, 206].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.fields = utils.objectToClass(httpRes?.data, shared.Fields);
          }
          break;
        case httpRes?.status == 304:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.empty = utils.objectToClass(httpRes?.data);
          }
          break;
        case [400, 401, 403, 429, 500, 503].includes(httpRes?.status):
          if (utils.matchContentType(contentType, `application/json`)) {
            res.error = utils.objectToClass(httpRes?.data, shared.ErrorT);
          }
          break;
      }

      return res;
    });
  }
}
