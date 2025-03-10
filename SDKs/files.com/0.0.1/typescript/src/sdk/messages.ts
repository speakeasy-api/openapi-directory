/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * Operations about messages
 */
export class Messages {
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
   * Delete Message
   *
   * @remarks
   * Delete Message
   */
  deleteMessagesId(
    req: operations.DeleteMessagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteMessagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteMessagesIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/messages/{id}", req);

    const client: AxiosInstance = this._defaultClient;

    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.DeleteMessagesIdResponse =
        new operations.DeleteMessagesIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case [204, 400, 401, 403, 404, 405, 409, 412, 422, 423, 429].includes(
          httpRes?.status
        ):
          break;
      }

      return res;
    });
  }

  /**
   * List Messages
   *
   * @remarks
   * List Messages
   */
  getMessages(
    req: operations.GetMessagesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessagesRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/messages";

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
      const res: operations.GetMessagesResponse =
        new operations.GetMessagesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.messageEntities = [];
            const resFieldDepth: number = utils.getResFieldDepth(res);
            res.messageEntities = utils.objectToClass(
              httpRes?.data,
              shared.MessageEntity,
              resFieldDepth
            );
          }
          break;
        case [400, 401, 403, 404, 405, 409, 412, 422, 423, 429].includes(
          httpRes?.status
        ):
          break;
      }

      return res;
    });
  }

  /**
   * Show Message
   *
   * @remarks
   * Show Message
   */
  getMessagesId(
    req: operations.GetMessagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessagesIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/messages/{id}", req);

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
      const res: operations.GetMessagesIdResponse =
        new operations.GetMessagesIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.messageEntity = utils.objectToClass(
              httpRes?.data,
              shared.MessageEntity
            );
          }
          break;
        case [400, 401, 403, 404, 405, 409, 412, 422, 423, 429].includes(
          httpRes?.status
        ):
          break;
      }

      return res;
    });
  }

  /**
   * Update Message
   *
   * @remarks
   * Update Message
   */
  patchMessagesId(
    req: operations.PatchMessagesIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PatchMessagesIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PatchMessagesIdRequest(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/messages/{id}", req);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "requestBody",
        "multipart"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody,
      ...config,
    });

    return r.then((httpRes: AxiosResponse) => {
      const contentType: string = httpRes?.headers?.["content-type"] ?? "";

      if (httpRes?.status == null)
        throw new Error(`status code not found in response: ${httpRes}`);
      const res: operations.PatchMessagesIdResponse =
        new operations.PatchMessagesIdResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 200:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.messageEntity = utils.objectToClass(
              httpRes?.data,
              shared.MessageEntity
            );
          }
          break;
        case [400, 401, 403, 404, 405, 409, 412, 422, 423, 429].includes(
          httpRes?.status
        ):
          break;
      }

      return res;
    });
  }

  /**
   * Create Message
   *
   * @remarks
   * Create Message
   */
  postMessages(
    req: operations.PostMessagesRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.PostMessagesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostMessagesRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/messages";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "multipart"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._defaultClient;

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
      const res: operations.PostMessagesResponse =
        new operations.PostMessagesResponse({
          statusCode: httpRes.status,
          contentType: contentType,
          rawResponse: httpRes,
        });
      switch (true) {
        case httpRes?.status == 201:
          if (utils.matchContentType(contentType, `application/json`)) {
            res.messageEntity = utils.objectToClass(
              httpRes?.data,
              shared.MessageEntity
            );
          }
          break;
        case [400, 401, 403, 404, 405, 409, 412, 422, 423, 429].includes(
          httpRes?.status
        ):
          break;
      }

      return res;
    });
  }
}
