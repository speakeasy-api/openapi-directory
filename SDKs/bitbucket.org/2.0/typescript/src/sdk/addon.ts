import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Addon {
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
   * deleteAddon - Deletes the application for the user.
   * 
   * This endpoint is intended to be used by Bitbucket Connect apps
   * and only supports JWT authentication -- that is how Bitbucket
   * identifies the particular installation of the app. Developers
   * with applications registered in the "Develop Apps" section
   * of Bitbucket Marketplace need not use this endpoint as
   * updates for those applications can be sent out via the
   * UI of that section.
   * 
   * ```
   * $ curl -X DELETE https://api.bitbucket.org/2.0/addon \
   *   -H "Authorization: JWT <JWT Token>"
   * ```
  **/
  deleteAddon(
    req: operations.DeleteAddonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addon";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAddonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteAddonLinkersLinkerKeyValues - Delete all [linker](/cloud/bitbucket/modules/linker/) values for the
   * specified linker of the authenticated application.
  **/
  deleteAddonLinkersLinkerKeyValues(
    req: operations.DeleteAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteAddonLinkersLinkerKeyValuesValueId - Delete a single [linker](/cloud/bitbucket/modules/linker/) value
   * of the authenticated application.
  **/
  deleteAddonLinkersLinkerKeyValuesValueId(
    req: operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAddonLinkersLinkerKeyValuesValueIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}/values/{value_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAddonLinkersLinkerKeyValuesValueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAddonLinkers - Gets a list of all [linkers](/cloud/bitbucket/modules/linker/)
   * for the authenticated application.
  **/
  getAddonLinkers(
    req: operations.GetAddonLinkersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addon/linkers";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddonLinkersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAddonLinkersLinkerKey - Gets a [linker](/cloud/bitbucket/modules/linker/) specified by `linker_key`
   * for the authenticated application.
  **/
  getAddonLinkersLinkerKey(
    req: operations.GetAddonLinkersLinkerKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersLinkerKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersLinkerKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddonLinkersLinkerKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAddonLinkersLinkerKeyValues - Gets a list of all [linker](/cloud/bitbucket/modules/linker/) values for the
   * specified linker of the authenticated application.
   * 
   * A linker value lets applications supply values to modify its regular expression.
   * 
   * The base regular expression must use a Bitbucket-specific match group `(?K)`
   * which will be translated to `([\w\-]+)`. A value must match this pattern.
   * 
   * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
  **/
  getAddonLinkersLinkerKeyValues(
    req: operations.GetAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getAddonLinkersLinkerKeyValuesValueId - Get a single [linker](/cloud/bitbucket/modules/linker/) value
   * of the authenticated application.
  **/
  getAddonLinkersLinkerKeyValuesValueId(
    req: operations.GetAddonLinkersLinkerKeyValuesValueIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAddonLinkersLinkerKeyValuesValueIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAddonLinkersLinkerKeyValuesValueIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}/values/{value_id}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAddonLinkersLinkerKeyValuesValueIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * postAddonLinkersLinkerKeyValues - Creates a [linker](/cloud/bitbucket/modules/linker/) value for the specified
   * linker of authenticated application.
   * 
   * A linker value lets applications supply values to modify its regular expression.
   * 
   * The base regular expression must use a Bitbucket-specific match group `(?K)`
   * which will be translated to `([\w\-]+)`. A value must match this pattern.
   * 
   * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
  **/
  postAddonLinkersLinkerKeyValues(
    req: operations.PostAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putAddon - Updates the application installation for the user.
   * 
   * This endpoint is intended to be used by Bitbucket Connect apps
   * and only supports JWT authentication -- that is how Bitbucket
   * identifies the particular installation of the app. Developers
   * with applications registered in the "Develop Apps" section
   * of Bitbucket Marketplace need not use this endpoint as
   * updates for those applications can be sent out via the
   * UI of that section.
   * 
   * A new, valid descriptor must be provided in the body of the
   * PUT request.
   * 
   * ```
   * $ curl -X PUT https://api.bitbucket.org/2.0/addon \
   *   -H "Authorization: JWT <JWT Token>" \
   *   --header "Content-Type: application/json" \
   *   --data '{"descriptor": $NEW_DESCRIPTOR}'
   * ```
   * 
   * Note that the scopes of the application cannot be increased
   * in the new descriptor nor reduced to none.
  **/
  putAddon(
    req: operations.PutAddonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAddonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAddonRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/addon";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutAddonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * putAddonLinkersLinkerKeyValues - Bulk update [linker](/cloud/bitbucket/modules/linker/) values for the specified
   * linker of the authenticated application.
   * 
   * A linker value lets applications supply values to modify its regular expression.
   * 
   * The base regular expression must use a Bitbucket-specific match group `(?K)`
   * which will be translated to `([\w\-]+)`. A value must match this pattern.
   * 
   * [Read more about linker values](/cloud/bitbucket/modules/linker/#usingthebitbucketapitosupplyvalues)
  **/
  putAddonLinkersLinkerKeyValues(
    req: operations.PutAddonLinkersLinkerKeyValuesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAddonLinkersLinkerKeyValuesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAddonLinkersLinkerKeyValuesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/addon/linkers/{linker_key}/values", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutAddonLinkersLinkerKeyValuesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
