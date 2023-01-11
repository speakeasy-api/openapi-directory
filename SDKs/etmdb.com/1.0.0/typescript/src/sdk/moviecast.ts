import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class MovieCast {
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
   * movieCastSearchRead - Return movie cast search result
   *
   * Return movie cast search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{movie_title}__: Used as a key word to search movie cast
   * * You can use both Amharic or English charset/font to search
   * 
   * For more details on how movie casts are listed [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  movieCastSearchRead(
    req: operations.MovieCastSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieCastSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieCastSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/movie-cast/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MovieCastSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * movieCastSearchallRead - Return movie cast search result
   *
   * Return movie cast search result
   * 
   * ### Response Class (Status 200)
   * __{param}__ argument can be
   * * artist first name
   * * artist last name
   * * artist username
   * * movie title or
   * * character name
   * 
   * For more details on how movie casts are listed [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  movieCastSearchallRead(
    req: operations.MovieCastSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MovieCastSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MovieCastSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/movie-cast/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MovieCastSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
