import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CinemaDetail {
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
   * cinemaDetailSearchRead - Return cinema details search result
   *
   * Return cinema details search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{cinema_name}__: Used as a key word to search cinemas,
   * 
   * For more details on how cinemas are listed [see here][ref].
   * [ref]: https://etmdb.com/en/cinema-list/-updated_date
  **/
  cinemaDetailSearchRead(
    req: operations.CinemaDetailSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CinemaDetailSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CinemaDetailSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/cinema-detail/search/{cinema_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CinemaDetailSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
