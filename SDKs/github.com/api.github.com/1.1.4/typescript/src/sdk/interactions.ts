import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Interactions {
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
   * interactionsGetRestrictionsForAuthenticatedUser - Get interaction restrictions for your public repositories
   *
   * Shows which type of GitHub user can interact with your public repositories and when the restriction expires. If there are no restrictions, you will see an empty response.
   *
   * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories - API method documentation
  **/
  interactionsGetRestrictionsForAuthenticatedUser(
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsGetRestrictionsForAuthenticatedUserResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/interaction-limits";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InteractionsGetRestrictionsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.interactionLimitResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsGetRestrictionsForOrg - Get interaction restrictions for an organization
   *
   * Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
   *
   * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization - API method documentation
  **/
  interactionsGetRestrictionsForOrg(
    req: operations.InteractionsGetRestrictionsForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsGetRestrictionsForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsGetRestrictionsForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/interaction-limits", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InteractionsGetRestrictionsForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.interactionLimitResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsGetRestrictionsForRepo - Get interaction restrictions for a repository
   *
   * Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
   *
   * https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository - API method documentation
  **/
  interactionsGetRestrictionsForRepo(
    req: operations.InteractionsGetRestrictionsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsGetRestrictionsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsGetRestrictionsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/interaction-limits", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InteractionsGetRestrictionsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.interactionLimitResponse = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsRemoveRestrictionsForAuthenticatedUser - Remove interaction restrictions from your public repositories
   *
   * Removes any interaction restrictions from your public repositories.
   *
   * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories - API method documentation
  **/
  interactionsRemoveRestrictionsForAuthenticatedUser(
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/interaction-limits";
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InteractionsRemoveRestrictionsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsRemoveRestrictionsForOrg - Remove interaction restrictions for an organization
   *
   * Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
   *
   * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization - API method documentation
  **/
  interactionsRemoveRestrictionsForOrg(
    req: operations.InteractionsRemoveRestrictionsForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsRemoveRestrictionsForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsRemoveRestrictionsForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/interaction-limits", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InteractionsRemoveRestrictionsForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsRemoveRestrictionsForRepo - Remove interaction restrictions for a repository
   *
   * Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
   *
   * https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository - API method documentation
  **/
  interactionsRemoveRestrictionsForRepo(
    req: operations.InteractionsRemoveRestrictionsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsRemoveRestrictionsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsRemoveRestrictionsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/interaction-limits", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InteractionsRemoveRestrictionsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 409:
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsSetRestrictionsForAuthenticatedUser - Set interaction restrictions for your public repositories
   *
   * Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user.
   *
   * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories - API method documentation
  **/
  interactionsSetRestrictionsForAuthenticatedUser(
    req: operations.InteractionsSetRestrictionsForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsSetRestrictionsForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsSetRestrictionsForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/interaction-limits";

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
        const res: operations.InteractionsSetRestrictionsForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.interactionLimitResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsSetRestrictionsForOrg - Set interaction restrictions for an organization
   *
   * Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
   *
   * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization - API method documentation
  **/
  interactionsSetRestrictionsForOrg(
    req: operations.InteractionsSetRestrictionsForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsSetRestrictionsForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsSetRestrictionsForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/interaction-limits", req.pathParams);

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
        const res: operations.InteractionsSetRestrictionsForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.interactionLimitResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * interactionsSetRestrictionsForRepo - Set interaction restrictions for a repository
   *
   * Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
   *
   * https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository - API method documentation
  **/
  interactionsSetRestrictionsForRepo(
    req: operations.InteractionsSetRestrictionsForRepoRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InteractionsSetRestrictionsForRepoResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InteractionsSetRestrictionsForRepoRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/interaction-limits", req.pathParams);

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
        const res: operations.InteractionsSetRestrictionsForRepoResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.interactionLimitResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            break;
        }

        return res;
      })
  }

}
