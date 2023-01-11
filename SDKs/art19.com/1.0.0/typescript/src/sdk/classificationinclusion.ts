import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ClassificationInclusion {
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
   * getClassificationInclusions - Get ClassificationInclusion records
   *
   * Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.
   * 
   * In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
   * be provided. Failing to do so renders a `400 Bad Request` response.
   * 
   * - `ids[]`
   * - `classified_id` and `classified_type`
   * - `classified_id` and `classification_type`
   * - `classification_id` and `classified_type`
   * 
  **/
  getClassificationInclusions(
    req: operations.GetClassificationInclusionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClassificationInclusionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClassificationInclusionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/classification_inclusions";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetClassificationInclusionsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getClassificationInclusions200ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getClassificationInclusions400ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

  
  /**
   * getClassificationInclusionsId - Get a specific classification inclusion
  **/
  getClassificationInclusionsId(
    req: operations.GetClassificationInclusionsIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetClassificationInclusionsIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetClassificationInclusionsIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/classification_inclusions/{id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetClassificationInclusionsIdResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/vnd.api+json`)) {
                res.getClassificationInclusionsId200ApplicationVndApiPlusJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 429:
            break;
        }

        return res;
      })
  }

}
