import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Events {
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
   * getV3Events - Get metadata for multiple events
   *
   * This endpoint returns the detailed event metadata for all specified events. Getty Images news, sports and entertainment photographers and
   * videographers cover editorially relevant events occurring around the world.  All images or video clips produced in association with 
   * an event, are assigned the same EventID. EventIDs are part of the meta-data returned in SearchForImages Results. Only content 
   * produced under a Getty Images brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) 
   * will be consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
   * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3Events(
    req: operations.GetV3EventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3EventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3EventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v3/events";
    
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
        const res: operations.GetV3EventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

  
  /**
   * getV3EventsId - Get metadata for a single event
   *
   * This endpoint returns the detailed event metadata for a specified event. Getty Images news, sports and entertainment 
   * photographers and videographers cover editorially relevant events occurring around the world.  
   * All images or video clips produced in association with an event, are assigned the same EventID. 
   * EventIDs are part of the meta-data returned in SearchForImages Results. Only content produced under a Getty Images 
   * brand name (Getty Images News, Getty Images Sports, Getty Images Entertainment, Film Magic, Wire Image) will be 
   * consistently assigned an EventID. The Event framework may also be used to group similar content, such as 
   * "Hats from the Royal Wedding" or "Odd-ballOffbeat images of the week". 
   * 
   * You'll need an API key and access token to use this resource.
   * 
  **/
  getV3EventsId(
    req: operations.GetV3EventsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetV3EventsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetV3EventsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v3/events/{id}", req.pathParams);
    
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
        const res: operations.GetV3EventsIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 404:
            break;
        }

        return res;
      })
  }

}
