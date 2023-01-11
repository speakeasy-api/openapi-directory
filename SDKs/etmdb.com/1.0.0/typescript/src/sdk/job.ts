import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Job {
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
   * jobSearchRead - Return job details search result
   *
   * Return job details search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{job_title}__: Used as a key word to search jobs,
   * 
   * For more details on how job are listed [see here][ref].
   * [ref]: https://etmdb.com/en/job-list/-updated_date
  **/
  jobSearchRead(
    req: operations.JobSearchReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobSearchReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobSearchReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/job/search/{job_title}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.JobSearchReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

  
  /**
   * jobSearchallRead - Return job details search result
   *
   * Return job details search result
   * 
   * ### Response Class (Status 200)
   * 
   * * __{company_name}__: Used as a key word to search jobs,
   * 
   * For more details on how job are listed [see here][ref].
   * [ref]: https://etmdb.com/en/job-list/-updated_date
  **/
  jobSearchallRead(
    req: operations.JobSearchallReadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.JobSearchallReadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.JobSearchallReadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/api/v1/job/searchall/{company_name}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.JobSearchallReadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
        }

        return res;
      })
  }

}
