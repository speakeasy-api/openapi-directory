import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"http://data.mediastore.{region}.amazonaws.com",
	"https://data.mediastore.{region}.amazonaws.com",
	"http://data.mediastore.{region}.amazonaws.com.cn",
	"https://data.mediastore.{region}.amazonaws.com.cn",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://docs.aws.amazon.com/mediastore/ - Amazon Web Services documentation*/
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
   * deleteObject - Deletes an object at the specified path.
  **/
  deleteObject(
    req: operations.DeleteObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteObjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{Path}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "delete",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteObjectResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.containerNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * describeObject - Gets the headers for an object at the specified path.
  **/
  describeObject(
    req: operations.DescribeObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeObjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{Path}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "head",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.describeObjectResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.containerNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getObject - Downloads the object at the specified path. If the object’s upload availability is set to <code>streaming</code>, AWS Elemental MediaStore downloads the object even if it’s still uploading the object.
  **/
  getObject(
    req: operations.GetObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetObjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{Path}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getObjectResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.containerNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.objectNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.requestedRangeNotSatisfiableException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listItems - Provides a list of metadata entries about folders and objects in the specified folder.
  **/
  listItems(
    req: operations.ListItemsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListItemsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListItemsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/";
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListItemsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listItemsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.containerNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putObject - Uploads an object to the specified path. Object sizes are limited to 25 MB for standard upload availability and 10 MB for streaming upload availability.
  **/
  putObject(
    req: operations.PutObjectRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutObjectResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutObjectRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/{Path}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutObjectResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.putObjectResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.containerNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.internalServerError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}