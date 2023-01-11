package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Search {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Search(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
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
    public openapisdk.models.operations.GetUsersSelectedUserSearchCodeResponse getUsersSelectedUserSearchCode(openapisdk.models.operations.GetUsersSelectedUserSearchCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/users/{selected_user}/search/code", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUsersSelectedUserSearchCodeResponse res = new openapisdk.models.operations.GetUsersSelectedUserSearchCodeResponse() {{
            searchResultPage = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SearchResultPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SearchResultPage.class);
                res.searchResultPage = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
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
    public openapisdk.models.operations.GetWorkspacesWorkspaceSearchCodeResponse getWorkspacesWorkspaceSearchCode(openapisdk.models.operations.GetWorkspacesWorkspaceSearchCodeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/workspaces/{workspace}/search/code", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetWorkspacesWorkspaceSearchCodeResponse res = new openapisdk.models.operations.GetWorkspacesWorkspaceSearchCodeResponse() {{
            searchResultPage = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SearchResultPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SearchResultPage.class);
                res.searchResultPage = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
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
    public openapisdk.models.operations.SearchAccountResponse searchAccount(openapisdk.models.operations.SearchAccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/teams/{username}/search/code", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SearchAccountResponse res = new openapisdk.models.operations.SearchAccountResponse() {{
            searchResultPage = null;
            error = null;
            error = null;
            error = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SearchResultPage out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SearchResultPage.class);
                res.searchResultPage = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }
        else if (httpRes.statusCode() == 429) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.error = out;
            }
        }

        return res;
    }
	
}