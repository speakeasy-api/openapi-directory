import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Workspaces {
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
   * getUserPermissionsWorkspaces - Returns an object for each workspace the caller is a member of, and
   * their effective role - the highest level of privilege the caller has.
   * If a user is a member of multiple groups with distinct roles, only the
   * highest level is returned.
   * 
   * Permissions can be:
   * 
   * * `owner`
   * * `collaborator`
   * * `member`
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/user/permissions/workspaces
   * 
   * {
   *   "pagelen": 10,
   *   "page": 1,
   *   "size": 1,
   *   "values": [
   *     {
   *       "type": "workspace_membership",
   *       "permission": "owner",
   *       "last_accessed": "2019-03-07T12:35:02.900024+00:00",
   *       "added_on": "2018-10-11T17:42:02.961424+00:00",
   *       "user": {
   *         "type": "user",
   *         "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
   *         "nickname": "evzijst",
   *         "display_name": "Erik van Zijst",
   *       },
   *       "workspace": {
   *         "type": "workspace",
   *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
   *         "slug": "bbworkspace1",
   *         "name": "Atlassian Bitbucket",
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Results may be further [filtered or sorted](../../../meta/filtering) by
   * workspace or permission by adding the following query string parameters:
   * 
   * * `q=workspace.slug="bbworkspace1"` or `q=permission="owner"`
   * * `sort=workspace.slug`
   * 
   * Note that the query parameter values need to be URL escaped so that `=`
   * would become `%3D`.
  **/
  getUserPermissionsWorkspaces(
    req: operations.GetUserPermissionsWorkspacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUserPermissionsWorkspacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUserPermissionsWorkspacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/permissions/workspaces";
    
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
        const res: operations.GetUserPermissionsWorkspacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaceMemberships = httpRes?.data;
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
   * getWorkspaces - Returns a list of workspaces accessible by the authenticated user.
   * 
   * Example:
   * 
   * ```
   * $ curl https://api.bitbucket.org/2.0/workspaces
   * 
   * {
   *   "pagelen": 10,
   *   "page": 1,
   *   "size": 1,
   *   "values": [
   *     {
   *         "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
   *         "links": {
   *             "owners": {
   *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members?q=permission%3D%22owner%22"
   *             },
   *             "self": {
   *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1"
   *             },
   *             "repositories": {
   *                 "href": "https://api.bitbucket.org/2.0/repositories/bbworkspace1"
   *             },
   *             "snippets": {
   *                 "href": "https://api.bitbucket.org/2.0/snippets/bbworkspace1"
   *             },
   *             "html": {
   *                 "href": "https://bitbucket.org/bbworkspace1/"
   *             },
   *             "avatar": {
   *                 "href": "https://bitbucket.org/workspaces/bbworkspace1/avatar/?ts=1543465801"
   *             },
   *             "members": {
   *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/members"
   *             },
   *             "projects": {
   *                 "href": "https://api.bitbucket.org/2.0/workspaces/bbworkspace1/projects"
   *             }
   *         },
   *         "created_on": "2018-11-14T19:15:05.058566+00:00",
   *         "type": "workspace",
   *         "slug": "bbworkspace1",
   *         "is_private": true,
   *         "name": "Atlassian Bitbucket"
   *     }
   *   ]
   * }
   * ```
   * 
   * Results may be further [filtered or sorted](../meta/filtering) by
   * workspace or permission by adding the following query string parameters:
   * 
   * * `q=slug="bbworkspace1"` or `q=is_private=true`
   * * `sort=created_on`
   * 
   * Note that the query parameter values need to be URL escaped so that `=`
   * would become `%3D`.
  **/
  getWorkspaces(
    req: operations.GetWorkspacesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/workspaces";
    
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
        const res: operations.GetWorkspacesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaces = httpRes?.data;
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
   * getWorkspacesWorkspace - Returns the requested workspace.
  **/
  getWorkspacesWorkspace(
    req: operations.GetWorkspacesWorkspaceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.workspace = httpRes?.data;
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
   * getWorkspacesWorkspaceMembers - Returns all members of the requested workspace.
  **/
  getWorkspacesWorkspaceMembers(
    req: operations.GetWorkspacesWorkspaceMembersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceMembersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceMembersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/members", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceMembersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaceMemberships = httpRes?.data;
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
   * getWorkspacesWorkspaceMembersMember - Returns the workspace membership, which includes
   * a `User` object for the member and a `Workspace` object
   * for the requested workspace.
  **/
  getWorkspacesWorkspaceMembersMember(
    req: operations.GetWorkspacesWorkspaceMembersMemberRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceMembersMemberResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceMembersMemberRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/members/{member}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceMembersMemberResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.workspaceMembership = httpRes?.data;
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

  
  /**
   * getWorkspacesWorkspacePermissions - Returns the list of members in a workspace
   * and their permission levels.
   * Permission can be:
   * * `owner`
   * * `collaborator`
   * * `member`
   * 
   * Example:
   * 
   * ```
   * $ curl -X https://api.bitbucket.org/2.0/workspaces/bbworkspace1/permissions
   * 
   * {
   *     "pagelen": 10,
   *     "values": [
   *         {
   *             "permission": "owner",
   *             "type": "workspace_membership",
   *             "user": {
   *                 "type": "user",
   *                 "uuid": "{470c176d-3574-44ea-bb41-89e8638bcca4}",
   *                 "display_name": "Erik van Zijst",
   *             },
   *             "workspace": {
   *                 "type": "workspace",
   *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
   *                 "slug": "bbworkspace1",
   *                 "name": "Atlassian Bitbucket",
   *             }
   *         },
   *         {
   *             "permission": "member",
   *             "type": "workspace_membership",
   *             "user": {
   *                 "type": "user",
   *                 "nickname": "seanaty",
   *                 "display_name": "Sean Conaty",
   *                 "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
   *             },
   *             "workspace": {
   *                 "type": "workspace",
   *                 "uuid": "{a15fb181-db1f-48f7-b41f-e1eff06929d6}",
   *                 "slug": "bbworkspace1",
   *                 "name": "Atlassian Bitbucket",
   *             }
   *         }
   *     ],
   *     "page": 1,
   *     "size": 2
   * }
   * ```
   * 
   * Results may be further [filtered](../../../meta/filtering) by
   * permission by adding the following query string parameters:
   * 
   * * `q=permission="owner"`
  **/
  getWorkspacesWorkspacePermissions(
    req: operations.GetWorkspacesWorkspacePermissionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePermissionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePermissionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/permissions", req.pathParams);
    
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
        const res: operations.GetWorkspacesWorkspacePermissionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedWorkspaceMemberships = httpRes?.data;
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
   * getWorkspacesWorkspacePermissionsRepositories - Returns an object for each repository permission for all of a
   * workspace's repositories.
   * 
   * Permissions returned are effective permissions: the highest level of
   * permission the user has. This does not distinguish between direct and
   * indirect (group) privileges.
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
   * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories
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
   *         "full_name": "atlassian_tutorial/geordi",
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
   *         "full_name": "atlassian_tutorial/geordi",
   *         "uuid": "{85d08b4e-571d-44e9-a507-fa476535aa98}"
   *       },
   *       "permission": "write"
   *     },
   *     {
   *       "type": "repository_permission",
   *       "user": {
   *         "type": "user",
   *         "display_name": "Jeff Zeng",
   *         "uuid": "{47f92a9a-c3a3-4d0b-bc4e-782a969c5c72}"
   *       },
   *       "repository": {
   *         "type": "repository",
   *         "name": "whee",
   *         "full_name": "atlassian_tutorial/whee",
   *         "uuid": "{30ba25e9-51ff-4555-8dd0-fc7ee2fa0895}"
   *       },
   *       "permission": "admin"
   *     }
   *   ],
   *   "page": 1,
   *   "size": 3
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
  getWorkspacesWorkspacePermissionsRepositories(
    req: operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePermissionsRepositoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/permissions/repositories", req.pathParams);
    
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
        const res: operations.GetWorkspacesWorkspacePermissionsRepositoriesResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getWorkspacesWorkspacePermissionsRepositoriesRepoSlug - Returns an object for the repository permission of each user in the
   * requested repository.
   * 
   * Permissions returned are effective permissions: the highest level of
   * permission the user has. This does not distinguish between direct and
   * indirect (group) privileges.
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
   * $ curl https://api.bitbucket.org/2.0/workspaces/atlassian_tutorial/permissions/repositories/geordi
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
   *         "full_name": "atlassian_tutorial/geordi",
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
   *         "full_name": "atlassian_tutorial/geordi",
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
  getWorkspacesWorkspacePermissionsRepositoriesRepoSlug(
    req: operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/permissions/repositories/{repo_slug}", req.pathParams);
    
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
        const res: operations.GetWorkspacesWorkspacePermissionsRepositoriesRepoSlugResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getWorkspacesWorkspaceProjects - Returns the list of projects in this workspace.
  **/
  getWorkspacesWorkspaceProjects(
    req: operations.GetWorkspacesWorkspaceProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceProjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/projects", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedProjects = httpRes?.data;
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
   * getWorkspacesWorkspaceProjectsProjectKey - Returns the requested project.
  **/
  getWorkspacesWorkspaceProjectsProjectKey(
    req: operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
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
