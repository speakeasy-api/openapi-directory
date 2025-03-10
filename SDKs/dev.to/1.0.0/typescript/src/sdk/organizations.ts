/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Organizations {
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
   * Organization's Articles
   *
   * @remarks
   * This endpoint allows the client to retrieve a list of Articles belonging to the organization
   *
   * It supports pagination, each page will contain `30` users by default.
   */
  getOrgArticles(
    req: operations.GetOrgArticlesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrgArticlesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrgArticlesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/organizations/{username}/articles",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
      const res: operations.GetOrgArticlesResponse =
        new operations.GetOrgArticlesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.articleIndices = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.articleIndices = utils.objectToClass(
              httpRes?.data,
              shared.ArticleIndex,
              resFieldDepth
            );
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }

  /**
   * Organization's users
   *
   * @remarks
   * This endpoint allows the client to retrieve a list of users belonging to the organization
   *
   * It supports pagination, each page will contain `30` users by default.
   */
  getOrgUsers(
    req: operations.GetOrgUsersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrgUsersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrgUsersRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/organizations/{username}/users",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

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
      const res: operations.GetOrgUsersResponse =
        new operations.GetOrgUsersResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.users = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.users = utils.objectToClass(
              httpRes?.data,
              shared.User,
              resFieldDepth
            );
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }

  /**
   * An organization
   *
   * @remarks
   * This endpoint allows the client to retrieve a single organization by their username
   */
  getOrganization(
    req: operations.GetOrganizationRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetOrganizationResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetOrganizationRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/api/organizations/{username}",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.GetOrganizationResponse =
        new operations.GetOrganizationResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.getOrganization200ApplicationJSONObject = utils.objectToClass(
              httpRes?.data
            );
          }
          break;
        case httpRes?.status == 404:
          break;
      }

      return res;
    });
  }
}
