import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"http://amplifybackend.{region}.amazonaws.com",
	"https://amplifybackend.{region}.amazonaws.com",
	"http://amplifybackend.{region}.amazonaws.com.cn",
	"https://amplifybackend.{region}.amazonaws.com.cn",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://docs.aws.amazon.com/amplifybackend/ - Amazon Web Services documentation*/
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
   * cloneBackend - This operation clones an existing backend.
  **/
  cloneBackend(
    req: operations.CloneBackendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CloneBackendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CloneBackendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/environments/{backendEnvironmentName}/clone", req.pathParams);

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
        const res: operations.CloneBackendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloneBackendResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createBackend - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
  **/
  createBackend(
    req: operations.CreateBackendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBackendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBackendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/backend";

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
        const res: operations.CreateBackendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createBackendResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createBackendApi - Creates a new backend API resource.
  **/
  createBackendApi(
    req: operations.CreateBackendApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBackendApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBackendApiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/api", req.pathParams);

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
        const res: operations.CreateBackendApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createBackendAPIResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createBackendAuth - Creates a new backend authentication resource.
  **/
  createBackendAuth(
    req: operations.CreateBackendAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBackendAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBackendAuthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/auth", req.pathParams);

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
        const res: operations.CreateBackendAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createBackendAuthResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createBackendConfig - Creates a config object for a backend.
  **/
  createBackendConfig(
    req: operations.CreateBackendConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateBackendConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateBackendConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/config", req.pathParams);

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
        const res: operations.CreateBackendConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createBackendConfigResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createToken - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
  **/
  createToken(
    req: operations.CreateTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/challenge", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createTokenResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteBackend - Removes an existing environment from your Amplify project.
  **/
  deleteBackend(
    req: operations.DeleteBackendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBackendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBackendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/environments/{backendEnvironmentName}/remove", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBackendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteBackendResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteBackendApi - Deletes an existing backend API resource.
  **/
  deleteBackendApi(
    req: operations.DeleteBackendApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBackendApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBackendApiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/api/{backendEnvironmentName}/remove", req.pathParams);

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
        const res: operations.DeleteBackendApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteBackendAPIResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteBackendAuth - Deletes an existing backend authentication resource.
  **/
  deleteBackendAuth(
    req: operations.DeleteBackendAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBackendAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBackendAuthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/auth/{backendEnvironmentName}/remove", req.pathParams);

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
        const res: operations.DeleteBackendAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteBackendAuthResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteToken - Deletes the challenge token based on the given appId and sessionId.
  **/
  deleteToken(
    req: operations.DeleteTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/challenge/{sessionId}/remove", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteTokenResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * generateBackendApiModels - Generates a model schema for an existing backend API resource.
  **/
  generateBackendApiModels(
    req: operations.GenerateBackendApiModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GenerateBackendApiModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GenerateBackendApiModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/api/{backendEnvironmentName}/generateModels", req.pathParams);

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
        const res: operations.GenerateBackendApiModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.generateBackendAPIModelsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBackend - Provides project-level details for your Amplify UI project.
  **/
  getBackend(
    req: operations.GetBackendRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBackendResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBackendRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/details", req.pathParams);

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
        const res: operations.GetBackendResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBackendResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBackendApi - Gets the details for a backend API.
  **/
  getBackendApi(
    req: operations.GetBackendApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBackendApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBackendApiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/api/{backendEnvironmentName}/details", req.pathParams);

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
        const res: operations.GetBackendApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBackendAPIResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBackendApiModels - Generates a model schema for existing backend API resource.
  **/
  getBackendApiModels(
    req: operations.GetBackendApiModelsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBackendApiModelsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBackendApiModelsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/api/{backendEnvironmentName}/getModels", req.pathParams);

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
        const res: operations.GetBackendApiModelsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBackendAPIModelsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBackendAuth - Gets a backend auth details.
  **/
  getBackendAuth(
    req: operations.GetBackendAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBackendAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBackendAuthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/auth/{backendEnvironmentName}/details", req.pathParams);

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
        const res: operations.GetBackendAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBackendAuthResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getBackendJob - Returns information about a specific job.
  **/
  getBackendJob(
    req: operations.GetBackendJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetBackendJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetBackendJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/job/{backendEnvironmentName}/{jobId}", req.pathParams);
    
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
        const res: operations.GetBackendJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getBackendJobResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getToken - Gets the challenge token based on the given appId and sessionId.
  **/
  getToken(
    req: operations.GetTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/challenge/{sessionId}", req.pathParams);
    
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
        const res: operations.GetTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getTokenResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * importBackendAuth - Imports an existing backend authentication resource.
  **/
  importBackendAuth(
    req: operations.ImportBackendAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImportBackendAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImportBackendAuthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/auth/{backendEnvironmentName}/import", req.pathParams);

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
        const res: operations.ImportBackendAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.importBackendAuthResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listBackendJobs - Lists the jobs for the backend of an Amplify app.
  **/
  listBackendJobs(
    req: operations.ListBackendJobsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBackendJobsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListBackendJobsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/job/{backendEnvironmentName}", req.pathParams);

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
        const res: operations.ListBackendJobsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listBackendJobsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * removeAllBackends - Removes all backend environments from your Amplify project.
  **/
  removeAllBackends(
    req: operations.RemoveAllBackendsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveAllBackendsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveAllBackendsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/remove", req.pathParams);

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
        const res: operations.RemoveAllBackendsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.removeAllBackendsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * removeBackendConfig - Removes the AWS resources required to access the Amplify Admin UI.
  **/
  removeBackendConfig(
    req: operations.RemoveBackendConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RemoveBackendConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RemoveBackendConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/config/remove", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RemoveBackendConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.removeBackendConfigResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBackendApi - Updates an existing backend API resource.
  **/
  updateBackendApi(
    req: operations.UpdateBackendApiRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBackendApiResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBackendApiRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/api/{backendEnvironmentName}", req.pathParams);

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
        const res: operations.UpdateBackendApiResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateBackendAPIResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBackendAuth - Updates an existing backend authentication resource.
  **/
  updateBackendAuth(
    req: operations.UpdateBackendAuthRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBackendAuthResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBackendAuthRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/auth/{backendEnvironmentName}", req.pathParams);

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
        const res: operations.UpdateBackendAuthResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateBackendAuthResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBackendConfig - Updates the AWS resources required to access the Amplify Admin UI.
  **/
  updateBackendConfig(
    req: operations.UpdateBackendConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBackendConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBackendConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/config/update", req.pathParams);

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
        const res: operations.UpdateBackendConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateBackendConfigResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * updateBackendJob - Updates a specific job.
  **/
  updateBackendJob(
    req: operations.UpdateBackendJobRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UpdateBackendJobResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UpdateBackendJobRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/backend/{appId}/job/{backendEnvironmentName}/{jobId}", req.pathParams);

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
        const res: operations.UpdateBackendJobResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.updateBackendJobResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.notFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.gatewayTimeoutException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tooManyRequestsException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.badRequestException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}