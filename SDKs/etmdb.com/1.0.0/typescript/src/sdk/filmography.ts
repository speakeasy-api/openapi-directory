import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Filmography {
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
   * filmographySearchRead - Return filmography search result
   *
   * Return filmography search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{movie_title}__: Used as a key word to search movies
   * * You can use both Amharic or English charset/font to search
   * 
   * For more details on how filmographies are listed [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  filmographySearchRead(
    req: operations.FilmographySearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographySearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographySearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/filmography/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilmographySearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * filmographySearchallRead - Return filmography search result
   *
   * Return filmography search result
   * 
   * ### Response Class (Status 200)
   * __{param}__ argument can be
   * * artist first name
   * * artist last name
   * * artist username
   * * movie title or
   * * filmography description (such as director, actor, producer, etc)
   * 
   * For more details on how filmographies are listed [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  filmographySearchallRead(
    req: operations.FilmographySearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FilmographySearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FilmographySearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/filmography/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.FilmographySearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
