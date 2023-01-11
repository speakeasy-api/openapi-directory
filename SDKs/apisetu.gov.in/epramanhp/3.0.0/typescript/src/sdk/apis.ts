import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ApIs {
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
   * agcer - Agriculture/ Agriculturist Certificate
   *
   * API to verify Agriculture/ Agriculturist Certificate.
  **/
  agcer(
    req: operations.AgcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AgcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AgcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/agcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.AgcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.agcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * bacer - Backward Area Certificate
   *
   * API to verify Backward Area Certificate.
  **/
  bacer(
    req: operations.BacerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BacerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BacerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bacer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.BacerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bacer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * bhcer - Bonafide Certificate
   *
   * API to verify Bonafide Certificate.
  **/
  bhcer(
    req: operations.BhcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BhcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BhcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/bhcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.BhcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.bhcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * chcer - Character Certificate
   *
   * API to verify Character Certificate.
  **/
  chcer(
    req: operations.ChcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ChcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ChcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/chcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.ChcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.chcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * dccer - Dogra Class Certificate
   *
   * API to verify Dogra Class Certificate.
  **/
  dccer(
    req: operations.DccerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DccerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DccerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/dccer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.DccerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.dccer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * ffcer - Freedom Fighter Certificate
   *
   * API to verify Freedom Fighter Certificate.
  **/
  ffcer(
    req: operations.FfcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.FfcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.FfcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/ffcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.FfcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.ffcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * incer - Income Certificate
   *
   * API to verify Income Certificate.
  **/
  incer(
    req: operations.IncerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.IncerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.IncerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/incer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.IncerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.incer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * lhcer - Legal Heir Certificate
   *
   * API to verify Legal Heir Certificate.
  **/
  lhcer(
    req: operations.LhcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LhcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LhcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/lhcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.LhcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lhcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * mncer - Minority Certificate
   *
   * API to verify Minority Certificate.
  **/
  mncer(
    req: operations.MncerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MncerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MncerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/mncer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.MncerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.mncer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * obcer - OBC Certificate
   *
   * API to verify OBC Certificate.
  **/
  obcer(
    req: operations.ObcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ObcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ObcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/obcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.ObcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.obcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * psprt - Passport/ Passport Verification
   *
   * API to verify Passport/ Passport Verification.
  **/
  psprt(
    req: operations.PsprtRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PsprtResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PsprtRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/psprt/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.PsprtResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.psprt504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * racer - Rural Area Certificate
   *
   * API to verify Rural Area Certificate.
  **/
  racer(
    req: operations.RacerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RacerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RacerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/racer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.RacerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.racer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * rmcer - Marriage Certificate
   *
   * API to verify Marriage Certificate.
  **/
  rmcer(
    req: operations.RmcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RmcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RmcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/rmcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.RmcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.rmcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * shcer - SC/ST  Certificate
   *
   * API to verify SC/ST  Certificate.
  **/
  shcer(
    req: operations.ShcerRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ShcerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ShcerRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/shcer/certificate";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
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
        const res: operations.ShcerResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer400ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer401ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer404ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer500ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 502:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer502ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer503ApplicationJSONObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 504:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.shcer504ApplicationJSONObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
