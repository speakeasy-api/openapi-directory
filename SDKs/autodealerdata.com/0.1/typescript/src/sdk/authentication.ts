import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Authentication {
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
   * getSubUserKeysGetSubUserKeysGet - Get all Sub User Keys associated with your account.
   *
   * Get a list of your issued SubUser API Keys. Includes active and revoked keys.
  **/
  getSubUserKeysGetSubUserKeysGet(
    req: operations.GetSubUserKeysGetSubUserKeysGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubUserKeysGetSubUserKeysGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubUserKeysGetSubUserKeysGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getSubUserKeys";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetSubUserKeysGetSubUserKeysGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * makeSubUserKeyMakeSubUserKeyPost - Generate a Sub User Key that can be used by your users to make API calls in frontend applications.
   *
   * This endpoint is only fully available to users with a paid plan. Users on Basic or Trial plans may only create keys valid on the "localhost" domain.
   * This endpoint creates an API key that can be embedded in frontend applications such as web pages that allow your users to directly make API calls. 
   * The "endpoints" value is an array of strings that name the allowed endpoints that may be called using the Sub User Key. Passing a "*" value in the array will allow
   * all endpoints that require a JWT (JSON Web Token) to be called by the Sub User Key. The keys are valid for as long as your account is valid or you revoke the Sub User Key.
   * All API calls made by the Sub User Keys are billed to your account. Additionally you should not call this endpoint or the /revokeSubUserKey endpoint at a combined rate 
   * higher than once per second. 
  **/
  makeSubUserKeyMakeSubUserKeyPost(
    req: operations.MakeSubUserKeyMakeSubUserKeyPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeSubUserKeyMakeSubUserKeyPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeSubUserKeyMakeSubUserKeyPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/makeSubUserKey";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.MakeSubUserKeyMakeSubUserKeyPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.subUserJSONWebToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * makeTokenGetTokenGet - Get a JWT from your API credentials
   *
   * This is the first function you should call. 
   * 
   * If you are accessing our API through a third party provider they will handle authenticating to our API for you 
   * and you will not need call this function or retrieve a JSON Web Token. 
   * 
   * All other functions require the JSON Web Token (JWT) from this function to 
   * be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
   * are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
   * API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
   * to get a new token.
  **/
  makeTokenGetTokenGet(
    req: operations.MakeTokenGetTokenGetRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeTokenGetTokenGetResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeTokenGetTokenGetRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getToken";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.MakeTokenGetTokenGetResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jsonWebToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * makeTokenGetTokenPost - Get a JWT from your API credentials
   *
   * This is the first function you should call. 
   * 
   * If you are accessing our API through a third party provider they will handle authenticating to our API for you 
   * and you will not need call this function or retrieve a JSON Web Token. 
   * 
   * All other functions require the JSON Web Token (JWT) from this function to 
   * be incuded in their arguments. The value of the "token" field is the actual JWT and any other values in the returned JSON
   * are metadata there for your convenience. Tokens are valid for a default of 1 hour (3600 seconds). If you try calling an
   * API endpoint with a missing, invalid, or expired JWT it will return a HTTP 403 code. You would then need to call this end point
   * to get a new token.
  **/
  makeTokenGetTokenPost(
    req: operations.MakeTokenGetTokenPostRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MakeTokenGetTokenPostResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MakeTokenGetTokenPostRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/getToken";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MakeTokenGetTokenPostResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.jsonWebToken = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * revokeSubUserKeyRevokeSubUserKeyPut - Revoke a Sub User Key associated with your account.
   *
   * Revoke a SubUser API Key with the given UUID. This action can not be undone.
  **/
  revokeSubUserKeyRevokeSubUserKeyPut(
    req: operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RevokeSubUserKeyRevokeSubUserKeyPutRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/revokeSubUserKey";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RevokeSubUserKeyRevokeSubUserKeyPutResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.genericResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.httpValidationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
