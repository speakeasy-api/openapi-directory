import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Showtime {
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
   * showtimeSearchallRead - Return showtime search result
   *
   * Return showtime search result
   * 
   * ### Response Class (Status 200)
   * __{param}__ argument can be
   * * show time or
   * * day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]
   * 
   * For more details about showtime, check each cinema from the cinema list [see here][ref].
   * [ref]: https://etmdb.com/en/movie-list/-updated_date
  **/
  showtimeSearchallRead(
    req: operations.ShowtimeSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShowtimeSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShowtimeSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/showtime/searchall/{param}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ShowtimeSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
