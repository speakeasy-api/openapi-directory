import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CommitStatuses {
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
   * getRepositoriesWorkspaceRepoSlugCommitCommitStatuses - Returns all statuses (e.g. build results) for a specific commit.
  **/
  getRepositoriesWorkspaceRepoSlugCommitCommitStatuses(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses", req.pathParams);
    
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
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedCommitstatuses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
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
   * getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Returns the specified build status for a commit.
  **/
  getRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(
    req: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commitstatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
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
   * getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses - Returns all statuses (e.g. build results) for the given pull
   * request.
  **/
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatuses(
    req: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", req.pathParams);
    
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
        const res: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.paginatedCommitstatuses = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
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
   * postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild - Creates a new build status against the specified commit.
   * 
   * If the specified key already exists, the existing status object will
   * be overwritten.
   * 
   * Example:
   * 
   * ```
   * curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
   *     "key": "MY-BUILD",
   *     "state": "SUCCESSFUL",
   *     "description": "42 tests passed",
   *     "url": "https://www.example.org/my-build-result"
   *   }'
   * ```
   * 
   * When creating a new commit status, you can use a URI template for the URL.
   * Templates are URLs that contain variable names that Bitbucket will
   * evaluate at runtime whenever the URL is displayed anywhere similar to
   * parameter substitution in
   * [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
   * For example, one could use `https://foo.com/builds/{repository.full_name}`
   * which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
   * The context variables available are `repository` and `commit`.
  **/
  postRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuild(
    req: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", req.pathParams);

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
        const res: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commitstatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
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
   * putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey - Used to update the current status of a build status object on the
   * specific commit.
   * 
   * This operation can also be used to change other properties of the
   * build status:
   * 
   * * `state`
   * * `name`
   * * `description`
   * * `url`
   * * `refname`
   * 
   * The `key` cannot be changed.
  **/
  putRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKey(
    req: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", req.pathParams);

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
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.commitstatus = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
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
