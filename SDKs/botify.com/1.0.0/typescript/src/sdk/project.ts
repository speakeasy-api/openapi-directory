import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Project {
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
   * getProjectAnalyses - List all analyses for a project
   *
   * List all analyses for a project
  **/
  getProjectAnalyses(
    req: operations.GetProjectAnalysesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectAnalysesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectAnalysesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/analyses/{username}/{project_slug}", req.pathParams);
    
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
        const res: operations.GetProjectAnalysesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getProjectAnalyses200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getProjectUrlsAggs - Project Query aggregator
   *
   * Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project
  **/
  getProjectUrlsAggs(
    req: operations.GetProjectUrlsAggsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetProjectUrlsAggsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetProjectUrlsAggsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{username}/{project_slug}/urls/aggs", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetProjectUrlsAggsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.default = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSavedFilter - Retrieves a specific saved filter's name, ID and filter value
   *
   * Retrieves a specific saved filter's name, ID and filter value
  **/
  getSavedFilter(
    req: operations.GetSavedFilterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSavedFilterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSavedFilterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{username}/{project_slug}/filters/{identifier}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSavedFilterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.projectSavedFilter = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getSavedFilters - List all the project's saved filters (each filter's name, ID and filter value)
   *
   * List all the project's saved filters (each filter's name, ID and filter value)
  **/
  getSavedFilters(
    req: operations.GetSavedFiltersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSavedFiltersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSavedFiltersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{username}/{project_slug}/filters", req.pathParams);
    
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
        const res: operations.GetSavedFiltersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSavedFilters200ApplicationJSONObject = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * testUrlRewritingRules - Match and replace parts of a URL based on rules passed in POST data
   *
   * Match and replace parts of a URL based on rules passed in POST data.
  **/
  testUrlRewritingRules(
    req: operations.TestUrlRewritingRulesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TestUrlRewritingRulesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TestUrlRewritingRulesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/projects/{username}/{project_slug}/features/url_rewriting/rules_validator", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TestUrlRewritingRulesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.urlRewritingRulesSerializer = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.defaultPayload = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
