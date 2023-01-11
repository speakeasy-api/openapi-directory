import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class People {
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
   * peopleSearchRead - Return cast search result
   *
   * Return cast search result
   * 
   * ### Response Class (Status 200)
   * __{param}__ argument can be
   * * artist first name
   * * artist last name
   * * artist username
   * 
   * For more details on how cast are listed [see here][ref].
   * [ref]: https://etmdb.com/en/cast-list/-updated_date
  **/
  peopleSearchRead(
    req: operations.PeopleSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PeopleSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PeopleSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/people/search/{user}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PeopleSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
