import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Media {
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
   * mediaSearchRead - Return movie media search result
   *
   * Return movie media search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{movie_title}__: Used as a key word to search media for movies
   * * You can use both Amharic or English charset/font to search
   * 
   * For more details on how media is listed [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  mediaSearchRead(
    req: operations.MediaSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/media/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MediaSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * mediaSearchallRead - Return cast media search result
   *
   * Return cast media search result
   * 
   * ### Response Class (Status 200)
   * __{user}__ argument can be
   * * artist first name
   * * artist last name
   * * artist username
   * 
   * For more details on how cast media is listed [see here][ref].
   * [ref]: https://etmdb.com/en/cast-list/-updated_date
  **/
  mediaSearchallRead(
    req: operations.MediaSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MediaSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MediaSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/media/searchall/{user}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MediaSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
