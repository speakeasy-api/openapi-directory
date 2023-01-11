import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class History {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getMessagesByChannel - Get message history for a channel
   *
   * Get message history for a channel
  **/
  getMessagesByChannel(
    req: operations.GetMessagesByChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMessagesByChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMessagesByChannelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/channels/{channel_id}/messages", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMessagesByChannelResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.matchContentType(contentType, `application/json`)) {
                res.messages = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/x-msgpack`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/html`)) {
                res.getMessagesByChannel2XXTextHTMLString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            break;
        }

        return res;
      })
  }

  
  /**
   * getPresenceHistoryOfChannel - Get presence history of a channel
   *
   * Get presence on a channel
  **/
  getPresenceHistoryOfChannel(
    req: operations.GetPresenceHistoryOfChannelRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetPresenceHistoryOfChannelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetPresenceHistoryOfChannelRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/channels/{channel_id}/presence/history", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetPresenceHistoryOfChannelResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case (httpRes?.status >= 200 && httpRes?.status < 300):
            if (utils.matchContentType(contentType, `application/json`)) {
                res.presenceMessages = httpRes?.data;
            }
            if (utils.matchContentType(contentType, `application/x-msgpack`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/html`)) {
                res.getPresenceHistoryOfChannel2XXTextHTMLString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/x-msgpack`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `text/html`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
