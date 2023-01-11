import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CinemaSchedule {
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
   * cinemaScheduleSearchRead - Return cinema schedule search result
   *
   * Return cinema schedule search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{movie_title}__: Used as a key word to search movie cast
   * * You can use both Amharic or English charset/font to search
   * 
   * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  cinemaScheduleSearchRead(
    req: operations.CinemaScheduleSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaScheduleSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaScheduleSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/cinema-schedule/search/{movie_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaScheduleSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * cinemaScheduleSearchallRead - Return cinema schedule search result
   *
   * Return cinema schedule search result
   * 
   * ### Response Class (Status 200)
   * __{param}__ argument can be
   * * movie title
   * * cinema name
   * * cinema hall name or
   * * cinema technology
   * 
   * For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  cinemaScheduleSearchallRead(
    req: operations.CinemaScheduleSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaScheduleSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaScheduleSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/cinema-schedule/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaScheduleSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
