import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Teams {
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
   * getTeams - Returns all the teams that the authenticated user is associated
   * with.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspaces](./workspaces) endpoint.
   * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeams(
    req: operations.GetTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/teams";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetTeamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedTeams = httpRes?.data;
            }
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
   * getTeamsUsername - Gets the public information associated with a team.
   * 
   * If the team's profile is private, `location`, `website` and
   * `created_on` elements are omitted.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
   * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsername(
    req: operations.GetTeamsUsernameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.team = httpRes?.data;
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
   * getTeamsUsernameFollowers - Returns the list of accounts that are following this team.
   * 
   * **This endpoint has been deprecated. There is no workspaces replacement.
   * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsernameFollowers(
    req: operations.GetTeamsUsernameFollowersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameFollowersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameFollowersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/followers", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameFollowersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
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
   * getTeamsUsernameFollowing - Returns the list of accounts this team is following.
   * 
   * **This endpoint has been deprecated. There is no workspaces replacement.
   * For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsernameFollowing(
    req: operations.GetTeamsUsernameFollowingRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameFollowingResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameFollowingRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/following", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameFollowingResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedUsers = httpRes?.data;
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
   * getTeamsUsernameMembers - Returns all members of the specified team. Any member of any of the
   * team's groups is considered a member of the team. This includes users
   * in groups that may not actually have access to any of the team's
   * repositories.
   * 
   * **This operation has been deprecated due to privacy changes.
   * See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
   * for details.
   * You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
  **/
  getTeamsUsernameMembers(
    req: operations.GetTeamsUsernameMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/members", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.user = httpRes?.data;
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
   * getTeamsUsernamePermissions - Returns an object for each team permission a user on the team has.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * Permissions returned are effective permissions — if a user is a member of
   * multiple groups with distinct roles, only the highest level is returned.
   * 
   * Permissions can be:
   * 
   * * `admin`
   * * `collaborator`
   * 
   * Only users with admin permission for the team may access this resource.
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions
   * 
   * {
   *   "pagelen": 10,
   *   "values": [
   *     {
   *       "permission": "admin",
   *       "type": "team_permission",
   *       "user": {
   *         "type": "user",
   *         "nickname": "evzijst",
   *         "display_name": "Erik van Zijst",
   *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
   *       },
   *       "team": {
   *         "display_name": "Atlassian Bitbucket",
   *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
   *       }
   *     },
   *     {
   *       "permission": "collaborator",
   *       "type": "team_permission",
   *       "user": {
   *         "type": "user",
   *         "nickname": "seanaty",
   *         "display_name": "Sean Conaty",
   *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
   *       },
   *       "team": {
   *         "display_name": "Atlassian Bitbucket",
   *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
   *       }
   *     }
   *   ],
   *   "page": 1,
   *   "size": 2
   * }
   * ```
   * 
   * Results may be further [filtered or sorted](../../../meta/filtering) by
   * team, user, or permission by adding the following query string
   * parameters:
   * 
   * * `q=user.uuid="{d301aafa-d676-4ee0-88be-962be7417567}"` or `q=permission="admin"`
   * * `sort=team.display_name`
   * 
   * Note that the query parameter values need to be URL escaped so that `=`
   * would become `%3D`.
  **/
  getTeamsUsernamePermissions(
    req: operations.GetTeamsUsernamePermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernamePermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernamePermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/permissions", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetTeamsUsernamePermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedTeamPermissions = httpRes?.data;
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
   * getTeamsUsernamePermissionsRepositories - Returns an object for each repository permission for all of a
   * team’s repositories.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * If the username URL parameter refers to a user account instead of
   * a team account, an object containing the repository permissions
   * of all the username's repositories will be returned.
   * 
   * Permissions returned are effective permissions — the highest level of
   * permission the user has. This does not include public repositories that
   * users are not granted any specific permission in, and does not
   * distinguish between direct and indirect privileges.
   * 
   * Only users with admin permission for the team may access this resource.
   * 
   * Permissions can be:
   * 
   * * `admin`
   * * `write`
   * * `read`
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories
   * 
   * {
   *   "pagelen": 10,
   *   "values": [
   *     {
   *       "type": "repository_permission",
   *       "user": {
   *         "type": "user",
   *         "display_name": "Erik van Zijst",
   *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
   *       },
   *       "repository": {
   *         "type": "repository",
   *         "name": "geordi",
   *         "full_name": "bitbucket/geordi",
   *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
   *       },
   *       "permission": "admin"
   *     },
   *     {
   *       "type": "repository_permission",
   *       "user": {
   *         "type": "user",
   *         "display_name": "Sean Conaty",
   *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
   *       },
   *       "repository": {
   *         "type": "repository",
   *         "name": "geordi",
   *         "full_name": "bitbucket/geordi",
   *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
   *       },
   *       "permission": "write"
   *     }
   *   ],
   *   "page": 1,
   *   "size": 2
   * }
   * ```
   * 
   * Results may be further [filtered or sorted](../../../../meta/filtering)
   * by repository, user, or permission by adding the following query string
   * parameters:
   * 
   * * `q=repository.name="geordi"` or `q=permission>"read"`
   * * `sort=user.display_name`
   * 
   * Note that the query parameter values need to be URL escaped so that `=`
   * would become `%3D`.
  **/
  getTeamsUsernamePermissionsRepositories(
    req: operations.GetTeamsUsernamePermissionsRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernamePermissionsRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernamePermissionsRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/permissions/repositories", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetTeamsUsernamePermissionsRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
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
   * getTeamsUsernamePermissionsRepositoriesRepoSlug - Returns an object for each repository permission of a given repository.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * If the username URL parameter refers to a user account instead of
   * a team account, an object containing the repository permissions
   * of the username's repository will be returned.
   * 
   * Permissions returned are effective permissions — the highest level of
   * permission the user has. This does not include public repositories that
   * users are not granted any specific permission in, and does not
   * distinguish between direct and indirect privileges.
   * 
   * Only users with admin permission for the repository may access this resource.
   * 
   * Permissions can be:
   * 
   * * `admin`
   * * `write`
   * * `read`
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi
   * 
   * {
   *   "pagelen": 10,
   *   "values": [
   *     {
   *       "type": "repository_permission",
   *       "user": {
   *         "type": "user",
   *         "display_name": "Erik van Zijst",
   *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
   *       },
   *       "repository": {
   *         "type": "repository",
   *         "name": "geordi",
   *         "full_name": "bitbucket/geordi",
   *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
   *       },
   *       "permission": "admin"
   *     },
   *     {
   *       "type": "repository_permission",
   *       "user": {
   *         "type": "user",
   *         "display_name": "Sean Conaty",
   *         "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
   *       },
   *       "repository": {
   *         "type": "repository",
   *         "name": "geordi",
   *         "full_name": "bitbucket/geordi",
   *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
   *       },
   *       "permission": "write"
   *     }
   *   ],
   *   "page": 1,
   *   "size": 2
   * }
   * ```
   * 
   * Results may be further [filtered or sorted](../../../../meta/filtering)
   * by user, or permission by adding the following query string parameters:
   * 
   * * `q=permission>"read"`
   * * `sort=user.display_name`
   * 
   * Note that the query parameter values need to be URL escaped so that `=`
   * would become `%3D`.
  **/
  getTeamsUsernamePermissionsRepositoriesRepoSlug(
    req: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/permissions/repositories/{repo_slug}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedRepositoryPermissions = httpRes?.data;
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
   * getTeamsWorkspaceRepositories - All repositories in the given workspace. This includes any private
   * repositories the calling user has access to.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
   * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsWorkspaceRepositories(
    req: operations.GetTeamsWorkspaceRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsWorkspaceRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsWorkspaceRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{workspace}/repositories", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsWorkspaceRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUserPermissionsTeams - Returns an object for each team the caller is a member of, and their
   * effective role — the highest level of privilege the caller has. If a
   * user is a member of multiple groups with distinct roles, only the
   * highest level is returned.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace permissions](./workspaces) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * Permissions can be:
   * 
   * * `admin`
   * * `collaborator`
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/user/permissions/teams
   * 
   * {
   *   "pagelen": 10,
   *   "values": [
   *     {
   *       "permission": "admin",
   *       "type": "team_permission",
   *       "user": {
   *         "type": "user",
   *         "nickname": "evzijst",
   *         "display_name": "Erik van Zijst",
   *         "uuid": "{d301aafa-d676-4ee0-88be-962be7417567}"
   *       },
   *       "team": {
   *         "display_name": "Atlassian Bitbucket",
   *         "uuid": "{4cc6108a-a241-4db0-96a5-64347ac04f87}"
   *       }
   *     }
   *   ],
   *   "page": 1,
   *   "size": 1
   * }
   * ```
   * 
   * Results may be further [filtered or sorted](../../../meta/filtering) by
   * team or permission by adding the following query string parameters:
   * 
   * * `q=team.uuid="{4cc6108a-a241-4db0-96a5-64347ac04f87}"` or `q=permission="admin"`
   * * `sort=team.display_name`
   * 
   * Note that the query parameter values need to be URL escaped so that `=`
   * would become `%3D`.
  **/
  getUserPermissionsTeams(
    req: operations.GetUserPermissionsTeamsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserPermissionsTeamsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserPermissionsTeamsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/permissions/teams";
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
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
        const res: operations.GetUserPermissionsTeamsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedTeamPermissions = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getUsersWorkspaceRepositories - All repositories in the given workspace. This includes any private
   * repositories the calling user has access to.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
   * For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getUsersWorkspaceRepositories(
    req: operations.GetUsersWorkspaceRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersWorkspaceRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersWorkspaceRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{workspace}/repositories", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUsersWorkspaceRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          default:
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

}
