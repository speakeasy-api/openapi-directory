import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Search {
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
   * getUsersSelectedUserSearchCode - Search for code in the repositories of the specified user.
   * 
   * Searching across all repositories:
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo'
   * {
   *   "size": 1,
   *   "page": 1,
   *   "pagelen": 10,
   *   "query_substituted": false,
   *   "values": [
   *     {
   *       "type": "code_search_result",
   *       "content_match_count": 2,
   *       "content_matches": [
   *         {
   *           "lines": [
   *             {
   *               "line": 2,
   *               "segments": []
   *             },
   *             {
   *               "line": 3,
   *               "segments": [
   *                 {
   *                   "text": "def "
   *                 },
   *                 {
   *                   "text": "foo",
   *                   "match": true
   *                 },
   *                 {
   *                   "text": "():"
   *                 }
   *               ]
   *             },
   *             {
   *               "line": 4,
   *               "segments": [
   *                 {
   *                   "text": "    print(\"snek\")"
   *                 }
   *               ]
   *             },
   *             {
   *               "line": 5,
   *               "segments": []
   *             }
   *           ]
   *         }
   *       ],
   *       "path_matches": [
   *         {
   *           "text": "src/"
   *         },
   *         {
   *           "text": "foo",
   *           "match": true
   *         },
   *         {
   *           "text": ".py"
   *         }
   *       ],
   *       "file": {
   *         "path": "src/foo.py",
   *         "type": "commit_file",
   *         "links": {
   *           "self": {
   *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
   *           }
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Note that searches can match in the file's text (`content_matches`),
   * the path (`path_matches`), or both as in the example above.
   * 
   * You can use the same syntax for the search query as in the UI, e.g.
   * to only search within a specific repository:
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo+repo:demo'
   * # results from the "demo" repository
   * ```
   * 
   * Similar to other APIs, you can request more fields using a
   * `fields` query parameter. E.g. to get some more information about
   * the repository of matched files (the `%2B` is a URL-encoded `+`):
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code'\
   *      '?search_query=foo&fields=%2Bvalues.file.commit.repository'
   * {
   *   "size": 1,
   *   "page": 1,
   *   "pagelen": 10,
   *   "query_substituted": false,
   *   "values": [
   *     {
   *       "type": "code_search_result",
   *       "content_match_count": 1,
   *       "content_matches": [...],
   *       "path_matches": [...],
   *       "file": {
   *         "commit": {
   *           "type": "commit",
   *           "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
   *           "links": {
   *             "self": {
   *               "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
   *             },
   *             "html": {
   *               "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
   *             }
   *           },
   *           "repository": {
   *             "name": "demo",
   *             "type": "repository",
   *             "full_name": "my-workspace/demo",
   *             "links": {
   *               "self": {
   *                 "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
   *               },
   *               "html": {
   *                 "href": "https://bitbucket.org/my-workspace/demo"
   *               },
   *               "avatar": {
   *                 "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
   *               }
   *             },
   *             "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
   *           }
   *         },
   *         "type": "commit_file",
   *         "links": {
   *           "self": {
   *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
   *           }
   *         },
   *         "path": "src/foo.py"
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
   * 
  **/
  getUsersSelectedUserSearchCode(
    req: operations.GetUsersSelectedUserSearchCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUsersSelectedUserSearchCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUsersSelectedUserSearchCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{selected_user}/search/code", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetUsersSelectedUserSearchCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResultPage = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * getWorkspacesWorkspaceSearchCode - Search for code in the repositories of the specified workspace.
   * 
   * Searching across all repositories:
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/workspaces/workspace_slug_or_uuid/search/code?search_query=foo'
   * {
   *   "size": 1,
   *   "page": 1,
   *   "pagelen": 10,
   *   "query_substituted": false,
   *   "values": [
   *     {
   *       "type": "code_search_result",
   *       "content_match_count": 2,
   *       "content_matches": [
   *         {
   *           "lines": [
   *             {
   *               "line": 2,
   *               "segments": []
   *             },
   *             {
   *               "line": 3,
   *               "segments": [
   *                 {
   *                   "text": "def "
   *                 },
   *                 {
   *                   "text": "foo",
   *                   "match": true
   *                 },
   *                 {
   *                   "text": "():"
   *                 }
   *               ]
   *             },
   *             {
   *               "line": 4,
   *               "segments": [
   *                 {
   *                   "text": "    print(\"snek\")"
   *                 }
   *               ]
   *             },
   *             {
   *               "line": 5,
   *               "segments": []
   *             }
   *           ]
   *         }
   *       ],
   *       "path_matches": [
   *         {
   *           "text": "src/"
   *         },
   *         {
   *           "text": "foo",
   *           "match": true
   *         },
   *         {
   *           "text": ".py"
   *         }
   *       ],
   *       "file": {
   *         "path": "src/foo.py",
   *         "type": "commit_file",
   *         "links": {
   *           "self": {
   *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
   *           }
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Note that searches can match in the file's text (`content_matches`),
   * the path (`path_matches`), or both as in the example above.
   * 
   * You can use the same syntax for the search query as in the UI, e.g.
   * to only search within a specific repository:
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code?search_query=foo+repo:demo'
   * # results from the "demo" repository
   * ```
   * 
   * Similar to other APIs, you can request more fields using a
   * `fields` query parameter. E.g. to get some more information about
   * the repository of matched files (the `%2B` is a URL-encoded `+`):
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code'\
   *      '?search_query=foo&fields=%2Bvalues.file.commit.repository'
   * {
   *   "size": 1,
   *   "page": 1,
   *   "pagelen": 10,
   *   "query_substituted": false,
   *   "values": [
   *     {
   *       "type": "code_search_result",
   *       "content_match_count": 1,
   *       "content_matches": [...],
   *       "path_matches": [...],
   *       "file": {
   *         "commit": {
   *           "type": "commit",
   *           "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
   *           "links": {
   *             "self": {
   *               "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
   *             },
   *             "html": {
   *               "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
   *             }
   *           },
   *           "repository": {
   *             "name": "demo",
   *             "type": "repository",
   *             "full_name": "my-workspace/demo",
   *             "links": {
   *               "self": {
   *                 "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
   *               },
   *               "html": {
   *                 "href": "https://bitbucket.org/my-workspace/demo"
   *               },
   *               "avatar": {
   *                 "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
   *               }
   *             },
   *             "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
   *           }
   *         },
   *         "type": "commit_file",
   *         "links": {
   *           "self": {
   *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
   *           }
   *         },
   *         "path": "src/foo.py"
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
   * 
  **/
  getWorkspacesWorkspaceSearchCode(
    req: operations.GetWorkspacesWorkspaceSearchCodeRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetWorkspacesWorkspaceSearchCodeResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetWorkspacesWorkspaceSearchCodeRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/workspaces/{workspace}/search/code", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.GetWorkspacesWorkspaceSearchCodeResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResultPage = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * searchAccount - Search for code in the repositories of the specified team.
   * 
   * Searching across all repositories:
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo'
   * {
   *   "size": 1,
   *   "page": 1,
   *   "pagelen": 10,
   *   "query_substituted": false,
   *   "values": [
   *     {
   *       "type": "code_search_result",
   *       "content_match_count": 2,
   *       "content_matches": [
   *         {
   *           "lines": [
   *             {
   *               "line": 2,
   *               "segments": []
   *             },
   *             {
   *               "line": 3,
   *               "segments": [
   *                 {
   *                   "text": "def "
   *                 },
   *                 {
   *                   "text": "foo",
   *                   "match": true
   *                 },
   *                 {
   *                   "text": "():"
   *                 }
   *               ]
   *             },
   *             {
   *               "line": 4,
   *               "segments": [
   *                 {
   *                   "text": "    print(\"snek\")"
   *                 }
   *               ]
   *             },
   *             {
   *               "line": 5,
   *               "segments": []
   *             }
   *           ]
   *         }
   *       ],
   *       "path_matches": [
   *         {
   *           "text": "src/"
   *         },
   *         {
   *           "text": "foo",
   *           "match": true
   *         },
   *         {
   *           "text": ".py"
   *         }
   *       ],
   *       "file": {
   *         "path": "src/foo.py",
   *         "type": "commit_file",
   *         "links": {
   *           "self": {
   *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
   *           }
   *         }
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Note that searches can match in the file's text (`content_matches`),
   * the path (`path_matches`), or both as in the example above.
   * 
   * You can use the same syntax for the search query as in the UI, e.g.
   * to only search within a specific repository:
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo+repo:demo'
   * # results from the "demo" repository
   * ```
   * 
   * Similar to other APIs, you can request more fields using a
   * `fields` query parameter. E.g. to get some more information about
   * the repository of matched files (the `%2B` is a URL-encoded `+`):
   * 
   * ```
   * curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code'\
   *      '?search_query=foo&fields=%2Bvalues.file.commit.repository'
   * {
   *   "size": 1,
   *   "page": 1,
   *   "pagelen": 10,
   *   "query_substituted": false,
   *   "values": [
   *     {
   *       "type": "code_search_result",
   *       "content_match_count": 1,
   *       "content_matches": [...],
   *       "path_matches": [...],
   *       "file": {
   *         "commit": {
   *           "type": "commit",
   *           "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
   *           "links": {
   *             "self": {
   *               "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
   *             },
   *             "html": {
   *               "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
   *             }
   *           },
   *           "repository": {
   *             "name": "demo",
   *             "type": "repository",
   *             "full_name": "my-workspace/demo",
   *             "links": {
   *               "self": {
   *                 "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
   *               },
   *               "html": {
   *                 "href": "https://bitbucket.org/my-workspace/demo"
   *               },
   *               "avatar": {
   *                 "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
   *               }
   *             },
   *             "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
   *           }
   *         },
   *         "type": "commit_file",
   *         "links": {
   *           "self": {
   *             "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
   *           }
   *         },
   *         "path": "src/foo.py"
   *       }
   *     }
   *   ]
   * }
   * ```
   * 
   * Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
   * 
  **/
  searchAccount(
    req: operations.SearchAccountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SearchAccountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SearchAccountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/teams/{username}/search/code", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SearchAccountResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.searchResultPage = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
          case httpRes?.status == 429:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.error = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
