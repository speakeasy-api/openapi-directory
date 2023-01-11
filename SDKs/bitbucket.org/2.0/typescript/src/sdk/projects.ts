import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Projects {
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
   * deleteTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
   * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#delete) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  deleteTeamsUsernameProjectsProjectKey(
    req: operations.DeleteTeamsUsernameProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteTeamsUsernameProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteTeamsUsernameProjectsProjectKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteTeamsUsernameProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * deleteWorkspacesWorkspaceProjectsProjectKey - Deletes this project. This is an irreversible operation.
   * 
   * You cannot delete a project that still contains repositories.
   * To delete the project, [delete](../../../repositories/%7Bworkspace%7D/%7Brepo_slug%7D#delete)
   * or transfer the repositories first.
   * 
   * Example:
   * ```
   * $ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
   * ```
  **/
  deleteWorkspacesWorkspaceProjectsProjectKey(
    req: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getTeamsUsernameProjects - **This endpoint has been deprecated,
   * and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#get) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsernameProjects(
    req: operations.GetTeamsUsernameProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameProjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/projects/", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameProjectsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedProjects = httpRes?.data;
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
   * getTeamsUsernameProjectsProjectKey - **This endpoint has been deprecated,
   * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#get) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
  **/
  getTeamsUsernameProjectsProjectKey(
    req: operations.GetTeamsUsernameProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetTeamsUsernameProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetTeamsUsernameProjectsProjectKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/projects/{project_key}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetTeamsUsernameProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
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
   * postTeamsUsernameProjects - Creates a new project.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#post) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * Note that the avatar has to be embedded as either a data-url
   * or a URL to an external image as shown in the examples below:
   * 
   * ```
   * $ body=$(cat << EOF
   * {
   *     "name": "Mars Project",
   *     "key": "MARS",
   *     "description": "Software for colonizing mars.",
   *     "links": {
   *         "avatar": {
   *             "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
   *         }
   *     },
   *     "is_private": false
   * }
   * EOF
   * )
   * $ curl -H "Content-Type: application/json" \
   *        -X POST \
   *        -d "$body" \
   *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
   * {
   *   // Serialized project document
   * }
   * ```
   * 
   * or even:
   * 
   * ```
   * $ body=$(cat << EOF
   * {
   *     "name": "Mars Project",
   *     "key": "MARS",
   *     "description": "Software for colonizing mars.",
   *     "links": {
   *         "avatar": {
   *             "href": "http://i.imgur.com/72tRx4w.gif"
   *         }
   *     },
   *     "is_private": false
   * }
   * EOF
   * )
   * $ curl -H "Content-Type: application/json" \
   *        -X POST \
   *        -d "$body" \
   *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
   * {
   *   // Serialized project document
   * }
   * ```
  **/
  postTeamsUsernameProjects(
    req: operations.PostTeamsUsernameProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostTeamsUsernameProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostTeamsUsernameProjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/projects/", req.pathParams);

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
        const res: operations.PostTeamsUsernameProjectsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
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
   * postWorkspacesWorkspaceProjects - Creates a new project.
   * 
   * Note that the avatar has to be embedded as either a data-url
   * or a URL to an external image as shown in the examples below:
   * 
   * ```
   * $ body=$(cat << EOF
   * {
   *     "name": "Mars Project",
   *     "key": "MARS",
   *     "description": "Software for colonizing mars.",
   *     "links": {
   *         "avatar": {
   *             "href": "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/..."
   *         }
   *     },
   *     "is_private": false
   * }
   * EOF
   * )
   * $ curl -H "Content-Type: application/json" \
   *        -X POST \
   *        -d "$body" \
   *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
   * {
   *   // Serialized project document
   * }
   * ```
   * 
   * or even:
   * 
   * ```
   * $ body=$(cat << EOF
   * {
   *     "name": "Mars Project",
   *     "key": "MARS",
   *     "description": "Software for colonizing mars.",
   *     "links": {
   *         "avatar": {
   *             "href": "http://i.imgur.com/72tRx4w.gif"
   *         }
   *     },
   *     "is_private": false
   * }
   * EOF
   * )
   * $ curl -H "Content-Type: application/json" \
   *        -X POST \
   *        -d "$body" \
   *        https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
   * {
   *   // Serialized project document
   * }
   * ```
  **/
  postWorkspacesWorkspaceProjects(
    req: operations.PostWorkspacesWorkspaceProjectsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostWorkspacesWorkspaceProjectsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostWorkspacesWorkspaceProjectsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/projects", req.pathParams);

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
        const res: operations.PostWorkspacesWorkspaceProjectsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
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
   * putTeamsUsernameProjectsProjectKey - Since this endpoint can be used to both update and to create a
   * project, the request body depends on the intent.
   * 
   * **This endpoint has been deprecated,
   * and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#put) endpoint.
   * For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
   * 
   * ### Creation
   * 
   * See the POST documentation for the project collection for an
   * example of the request body.
   * 
   * Note: The `key` should not be specified in the body of request
   * (since it is already present in the URL). The `name` is required,
   * everything else is optional.
   * 
   * ### Update
   * 
   * See the POST documentation for the project collection for an
   * example of the request body.
   * 
   * Note: The key is not required in the body (since it is already in
   * the URL). The key may be specified in the body, if the intent is
   * to change the key itself. In such a scenario, the location of the
   * project is changed and is returned in the `Location` header of the
   * response.
  **/
  putTeamsUsernameProjectsProjectKey(
    req: operations.PutTeamsUsernameProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutTeamsUsernameProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutTeamsUsernameProjectsProjectKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/projects/{project_key}", req.pathParams);

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
        const res: operations.PutTeamsUsernameProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
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
   * putWorkspacesWorkspaceProjectsProjectKey - Since this endpoint can be used to both update and to create a
   * project, the request body depends on the intent.
   * 
   * ### Creation
   * 
   * See the POST documentation for the project collection for an
   * example of the request body.
   * 
   * Note: The `key` should not be specified in the body of request
   * (since it is already present in the URL). The `name` is required,
   * everything else is optional.
   * 
   * ### Update
   * 
   * See the POST documentation for the project collection for an
   * example of the request body.
   * 
   * Note: The key is not required in the body (since it is already in
   * the URL). The key may be specified in the body, if the intent is
   * to change the key itself. In such a scenario, the location of the
   * project is changed and is returned in the `Location` header of the
   * response.
  **/
  putWorkspacesWorkspaceProjectsProjectKey(
    req: operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/projects/{project_key}", req.pathParams);

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
        const res: operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
            }
            break;
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.project = httpRes?.data;
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
