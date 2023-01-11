import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"http://pi.{region}.amazonaws.com",
	"https://pi.{region}.amazonaws.com",
	"http://pi.{region}.amazonaws.com.cn",
	"https://pi.{region}.amazonaws.com.cn",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://docs.aws.amazon.com/pi/ - Amazon Web Services documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * describeDimensionKeys - <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
  **/
  describeDimensionKeys(
    req: operations.DescribeDimensionKeysRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeDimensionKeysResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeDimensionKeysRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=PerformanceInsightsv20180227.DescribeDimensionKeys";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeDimensionKeysResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.describeDimensionKeysResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.invalidArgumentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notAuthorizedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getDimensionKeyDetails - Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID, <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID. This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large SQL statement text.
  **/
  getDimensionKeyDetails(
    req: operations.GetDimensionKeyDetailsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetDimensionKeyDetailsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetDimensionKeyDetailsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=PerformanceInsightsv20180227.GetDimensionKeyDetails";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetDimensionKeyDetailsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getDimensionKeyDetailsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.invalidArgumentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notAuthorizedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getResourceMetrics - <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide specific dimension groups and dimensions, and provide aggregation and filtering criteria for each group.</p> <note> <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements, only the first 500 bytes are returned.</p> </note>
  **/
  getResourceMetrics(
    req: operations.GetResourceMetricsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetResourceMetricsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetResourceMetricsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=PerformanceInsightsv20180227.GetResourceMetrics";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetResourceMetricsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getResourceMetricsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.invalidArgumentException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServiceError = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notAuthorizedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}