import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Downloads {
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
   * deleteRepositoriesWorkspaceRepoSlugDownloadsFilename - Deletes the specified download artifact from the repository.
  **/
  deleteRepositoriesWorkspaceRepoSlugDownloadsFilename(
    req: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getRepositoriesWorkspaceRepoSlugDownloads - Returns a list of download links associated with the repository.
  **/
  getRepositoriesWorkspaceRepoSlugDownloads(
    req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * getRepositoriesWorkspaceRepoSlugDownloadsFilename - Return a redirect to the contents of a download artifact.
   * 
   * This endpoint returns the actual file contents and not the artifact's
   * metadata.
   * 
   *     $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
   *     Hello World
  **/
  getRepositoriesWorkspaceRepoSlugDownloadsFilename(
    req: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse = {statusCode: httpRes.status, contentType: contentType};
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
   * postRepositoriesWorkspaceRepoSlugDownloads - Upload new download artifacts.
   * 
   * To upload files, perform a `multipart/form-data` POST containing one
   * or more `files` fields:
   * 
   *     $ echo Hello World > hello.txt
   *     $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt
   * 
   * When a file is uploaded with the same name as an existing artifact,
   * then the existing file will be replaced.
  **/
  postRepositoriesWorkspaceRepoSlugDownloads(
    req: operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repositories/{workspace}/{repo_slug}/downloads", req.pathParams);
    
    const client: AxiosInstance = utils.createSecurityClient(this._defaultClient!, req.security)!;
    
    
    const r = client.request({
      url: url,
      method: "post",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse = {statusCode: httpRes.status, contentType: contentType};
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

}
