import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Search {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Search for code in a user's repositories
     *
     * @remarks
     * Search for code in the repositories of the specified user.
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
     */
    searchAccount(req: operations.SearchAccountRequest, config?: AxiosRequestConfig): Promise<operations.SearchAccountResponse>;
    /**
     * Search for code in a team's repositories
     *
     * @remarks
     * Search for code in the repositories of the specified team.
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
     */
    searchTeam(req: operations.SearchTeamRequest, config?: AxiosRequestConfig): Promise<operations.SearchTeamResponse>;
    /**
     * Search for code in a workspace
     *
     * @remarks
     * Search for code in the repositories of the specified workspace.
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
     */
    searchWorkspace(req: operations.SearchWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.SearchWorkspaceResponse>;
}
