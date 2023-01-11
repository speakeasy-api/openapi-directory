import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Webhooks {
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
   * deleteRepositoriesWorkspaceRepoSlugHooksUid - Deletes the specified webhook subscription from the given
   * repository.
  **/
  deleteRepositoriesWorkspaceRepoSlugHooksUid(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
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
   * deleteTeamsUsernameHooksUid - Deletes the specified webhook subscription from the given team
   * account.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  deleteTeamsUsernameHooksUid(
    req: operations.DeleteTeamsUsernameHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamsUsernameHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamsUsernameHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTeamsUsernameHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
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
   * deleteUsersSelectedUserHooksUid - Deletes the specified webhook subscription from the given user
   * account.
   * 
   * Note that the username path parameter has been deprecated due to
   * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
   * Use the account's UUID or account_id instead.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  deleteUsersSelectedUserHooksUid(
    req: operations.DeleteUsersSelectedUserHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteUsersSelectedUserHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteUsersSelectedUserHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteUsersSelectedUserHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
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
   * deleteWorkspacesWorkspaceHooksUid - Deletes the specified webhook subscription from the given workspace.
  **/
  deleteWorkspacesWorkspaceHooksUid(
    req: operations.DeleteWorkspacesWorkspaceHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspacesWorkspaceHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspacesWorkspaceHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWorkspacesWorkspaceHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
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
   * getHookEvents - Returns the webhook resource or subject types on which webhooks can
   * be registered.
   * 
   * Each resource/subject type contains an `events` link that returns the
   * paginated list of specific events each individual subject type can
   * emit.
   * 
   * This endpoint is publicly accessible and does not require
   * authentication or scopes.
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/hook_events
   * 
   * {
   *     "repository": {
   *         "links": {
   *             "events": {
   *                 "href": "https://api.bitbucket.org/2.0/hook_events/repository"
   *             }
   *         }
   *     },
   *     "team": {
   *         "links": {
   *             "events": {
   *                 "href": "https://api.bitbucket.org/2.0/hook_events/team"
   *             }
   *         }
   *     },
   *     "user": {
   *         "links": {
   *             "events": {
   *                 "href": "https://api.bitbucket.org/2.0/hook_events/user"
   *             }
   *         }
   *     }
   * }
   * ```
  **/
  getHookEvents(
    req: operations.GetHookEventsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHookEventsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHookEventsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/hook_events";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHookEventsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.subjectTypes = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getHookEventsSubjectType - Returns a paginated list of all valid webhook events for the
   * specified entity.
   * **The team and user webhooks are deprecated, and you should use workspace instead.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * This is public data that does not require any scopes or authentication.
   * 
   * Example:
   * 
   * NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
   * We return the same structure for the other `subject_type` objects.
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/hook_events/workspace
   * {
   *     "page": 1,
   *     "pagelen": 30,
   *     "size": 21,
   *     "values": [
   *         {
   *             "category": "Repository",
   *             "description": "Whenever a repository push occurs",
   *             "event": "repo:push",
   *             "label": "Push"
   *         },
   *         {
   *             "category": "Repository",
   *             "description": "Whenever a repository fork occurs",
   *             "event": "repo:fork",
   *             "label": "Fork"
   *         },
   *         {
   *             "category": "Repository",
   *             "description": "Whenever a repository import occurs",
   *             "event": "repo:imported",
   *             "label": "Import"
   *         },
   *         ...
   *         {
   *             "category":"Pull Request",
   *             "label":"Approved",
   *             "description":"When someone has approved a pull request",
   *             "event":"pullrequest:approved"
   *         },
   *     ]
   * }
   * ```
  **/
  getHookEventsSubjectType(
    req: operations.GetHookEventsSubjectTypeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetHookEventsSubjectTypeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetHookEventsSubjectTypeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/hook_events/{subject_type}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetHookEventsSubjectTypeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedHookEvents = httpRes?.data;
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
   * getRepositoriesWorkspaceRepoSlugHooks - Returns a paginated list of webhooks installed on this repository.
  **/
  getRepositoriesWorkspaceRepoSlugHooks(
    req: operations.GetRepositoriesWorkspaceRepoSlugHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * getRepositoriesWorkspaceRepoSlugHooksUid - Returns the webhook with the specified id installed on the specified
   * repository.
  **/
  getRepositoriesWorkspaceRepoSlugHooksUid(
    req: operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
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
   * getTeamsUsernameHooks - Returns a paginated list of webhooks installed on this team.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsernameHooks(
    req: operations.GetTeamsUsernameHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * getTeamsUsernameHooksUid - Returns the webhook with the specified id installed on the given
   * team account.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsernameHooksUid(
    req: operations.GetTeamsUsernameHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
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
   * getUsersSelectedUserHooks - Returns a paginated list of webhooks installed on this user account.
   * 
   * Note that the username path parameter has been deprecated due to
   * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
   * Use the account's UUID or account_id instead.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getUsersSelectedUserHooks(
    req: operations.GetUsersSelectedUserHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersSelectedUserHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * getUsersSelectedUserHooksUid - Returns the webhook with the specified id installed on the given
   * user account.
   * 
   * Note that the username path parameter has been deprecated due to
   * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
   * Use the account's UUID or account_id instead.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getUsersSelectedUserHooksUid(
    req: operations.GetUsersSelectedUserHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersSelectedUserHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
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
   * getWorkspacesWorkspaceHooks - Returns a paginated list of webhooks installed on this workspace.
  **/
  getWorkspacesWorkspaceHooks(
    req: operations.GetWorkspacesWorkspaceHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceHooksResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWebhookSubscriptions = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * getWorkspacesWorkspaceHooksUid - Returns the webhook with the specified id installed on the given
   * workspace.
  **/
  getWorkspacesWorkspaceHooksUid(
    req: operations.GetWorkspacesWorkspaceHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
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
   * postRepositoriesWorkspaceRepoSlugHooks - Creates a new webhook on the specified repository.
   * 
   * Example:
   * 
   * ```
   * $ curl -X POST -u credentials -H 'Content-Type: application/json'
   *   https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
   *   -d '
   *     {
   *       "description": "Webhook Description",
   *       "url": "https://example.com/",
   *       "active": true,
   *       "events": [
   *         "repo:push",
   *         "issue:created",
   *         "issue:updated"
   *       ]
   *     }'
   * ```
   * 
   * Note that this call requires the webhook scope, as well as any scope
   * that applies to the events that the webhook subscribes to. In the
   * example above that means: `webhook`, `repository` and `issue`.
   * 
   * Also note that the `url` must properly resolve and cannot be an
   * internal, non-routed address.
  **/
  postRepositoriesWorkspaceRepoSlugHooks(
    req: operations.PostRepositoriesWorkspaceRepoSlugHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRepositoriesWorkspaceRepoSlugHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * postTeamsUsernameHooks - Creates a new webhook on the specified team.
   * 
   * Team webhooks are fired for events from all repositories belonging to
   * that team account.
   * 
   * Note that only admins can install webhooks on teams.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  postTeamsUsernameHooks(
    req: operations.PostTeamsUsernameHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsUsernameHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsUsernameHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostTeamsUsernameHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * postUsersSelectedUserHooks - Creates a new webhook on the specified user account.
   * 
   * Account-level webhooks are fired for events from all repositories
   * belonging to that account.
   * 
   * Note that one can only register webhooks on one's own account, not that
   * of others.
   * 
   * Also, note that the username path parameter has been deprecated due to
   * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
   * Use the account's UUID or account_id instead.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  postUsersSelectedUserHooks(
    req: operations.PostUsersSelectedUserHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUsersSelectedUserHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUsersSelectedUserHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUsersSelectedUserHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * postWorkspacesWorkspaceHooks - Creates a new webhook on the specified workspace.
   * 
   * Workspace webhooks are fired for events from all repositories contained
   * by that workspace.
   * 
   * Note that only owners can install webhooks on workspaces.
  **/
  postWorkspacesWorkspaceHooks(
    req: operations.PostWorkspacesWorkspaceHooksRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWorkspacesWorkspaceHooksResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWorkspacesWorkspaceHooksRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostWorkspacesWorkspaceHooksResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * putRepositoriesWorkspaceRepoSlugHooksUid - Updates the specified webhook subscription.
   * 
   * The following properties can be mutated:
   * 
   * * `description`
   * * `url`
   * * `active`
   * * `events`
  **/
  putRepositoriesWorkspaceRepoSlugHooksUid(
    req: operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRepositoriesWorkspaceRepoSlugHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * putTeamsUsernameHooksUid - Updates the specified webhook subscription.
   * 
   * The following properties can be mutated:
   * 
   * * `description`
   * * `url`
   * * `active`
   * * `events`
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  putTeamsUsernameHooksUid(
    req: operations.PutTeamsUsernameHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTeamsUsernameHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTeamsUsernameHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutTeamsUsernameHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * putUsersSelectedUserHooksUid - Updates the specified webhook subscription.
   * 
   * The following properties can be mutated:
   * 
   * * `description`
   * * `url`
   * * `active`
   * * `events`
   * 
   * Note that the username path parameter has been deprecated due to
   * [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
   * Use the account's UUID or account_id instead.
   * 
   * **This endpoint has been deprecated, and you should
   * use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  putUsersSelectedUserHooksUid(
    req: operations.PutUsersSelectedUserHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutUsersSelectedUserHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutUsersSelectedUserHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutUsersSelectedUserHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
   * putWorkspacesWorkspaceHooksUid - Updates the specified webhook subscription.
   * 
   * The following properties can be mutated:
   * 
   * * `description`
   * * `url`
   * * `active`
   * * `events`
  **/
  putWorkspacesWorkspaceHooksUid(
    req: operations.PutWorkspacesWorkspaceHooksUidRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWorkspacesWorkspaceHooksUidResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWorkspacesWorkspaceHooksUidRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/hooks/{uid}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "put",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutWorkspacesWorkspaceHooksUidResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.webhookSubscription = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
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
