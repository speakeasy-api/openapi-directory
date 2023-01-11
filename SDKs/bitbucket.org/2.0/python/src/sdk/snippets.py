import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Snippets:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def delete_snippets_workspace_encoded_id_(self, request: operations.DeleteSnippetsWorkspaceEncodedIDRequest) -> operations.DeleteSnippetsWorkspaceEncodedIDResponse:
        r"""Deletes a snippet and returns an empty response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSnippetsWorkspaceEncodedIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_snippets_workspace_encoded_id_comments_comment_id_(self, request: operations.DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDRequest) -> operations.DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDResponse:
        r"""Deletes a snippet comment.
        
        Comments can only be removed by their author.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSnippetsWorkspaceEncodedIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_snippets_workspace_encoded_id_watch(self, request: operations.DeleteSnippetsWorkspaceEncodedIDWatchRequest) -> operations.DeleteSnippetsWorkspaceEncodedIDWatchResponse:
        r"""Used to stop watching a specific snippet. Returns 204 (No Content)
        to indicate success.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/watch", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSnippetsWorkspaceEncodedIDWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedUsers])
                res.paginated_users = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_snippets_workspace_encoded_id_node_id_(self, request: operations.DeleteSnippetsWorkspaceEncodedIDNodeIDRequest) -> operations.DeleteSnippetsWorkspaceEncodedIDNodeIDResponse:
        r"""Deletes the snippet.
        
        Note that this only works for versioned URLs that point to the latest
        commit of the snippet. Pointing to an older commit results in a 405
        status code.
        
        To delete a snippet, regardless of whether or not concurrent changes
        are being made to it, use `DELETE /snippets/{encoded_id}` instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/{node_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSnippetsWorkspaceEncodedIDNodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets(self, request: operations.GetSnippetsRequest) -> operations.GetSnippetsResponse:
        r"""Returns all snippets. Like pull requests, repositories and workspaces, the
        full set of snippets is defined by what the current user has access to.
        
        This includes all snippets owned by any of the workspaces the user is a member of,
        or snippets by other users that the current user is either watching or has collaborated
        on (for instance by commenting on it).
        
        To limit the set of returned snippets, apply the
        `?role=[owner|contributor|member]` query parameter where the roles are
        defined as follows:
        
        * `owner`: all snippets owned by the current user
        * `contributor`: all snippets owned by, or watched by the current user
        * `member`: created in a workspaces or watched by the current user
        
        When no role is specified, all public snippets are returned, as well as all
        privately owned snippets watched or commented on.
        
        The returned response is a normal paginated JSON list. This endpoint
        only supports `application/json` responses and no
        `multipart/form-data` or `multipart/related`. As a result, it is not
        possible to include the file contents.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/snippets"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedSnippets])
                res.paginated_snippets = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_(self, request: operations.GetSnippetsWorkspaceRequest) -> operations.GetSnippetsWorkspaceResponse:
        r"""Identical to [`/snippets`](../snippets), except that the result is further filtered
        by the snippet owner and only those that are owned by `{workspace}` are
        returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedSnippets])
                res.paginated_snippets = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_(self, request: operations.GetSnippetsWorkspaceEncodedIDRequest) -> operations.GetSnippetsWorkspaceEncodedIDResponse:
        r"""Retrieves a single snippet.
        
        Snippets support multiple content types:
        
        * application/json
        * multipart/related
        * multipart/form-data
        
        
        application/json
        ----------------
        
        The default content type of the response is `application/json`.
        Since JSON is always `utf-8`, it cannot reliably contain file contents
        for files that are not text. Therefore, JSON snippet documents only
        contain the filename and links to the file contents.
        
        This means that in order to retrieve all parts of a snippet, N+1
        requests need to be made (where N is the number of files in the
        snippet).
        
        
        multipart/related
        -----------------
        
        To retrieve an entire snippet in a single response, use the
        `Accept: multipart/related` HTTP request header.
        
            $ curl -H \"Accept: multipart/related\" https://api.bitbucket.org/2.0/snippets/evzijst/1
        
        Response:
        
            HTTP/1.1 200 OK
            Content-Length: 2214
            Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"
            MIME-Version: 1.0
        
            --===============1438169132528273974==
            Content-Type: application/json; charset=\"utf-8\"
            MIME-Version: 1.0
            Content-ID: snippet
        
            {
              \"links\": {
                \"self\": {
                  \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj\"
                },
                \"html\": {
                  \"href\": \"https://bitbucket.org/snippets/evzijst/kypj\"
                },
                \"comments\": {
                  \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/comments\"
                },
                \"watchers\": {
                  \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/watchers\"
                },
                \"commits\": {
                  \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/commits\"
                }
              },
              \"id\": kypj,
              \"title\": \"My snippet\",
              \"created_on\": \"2014-12-29T22:22:04.790331+00:00\",
              \"updated_on\": \"2014-12-29T22:22:04.790331+00:00\",
              \"is_private\": false,
              \"files\": {
                \"foo.txt\": {
                  \"links\": {
                    \"self\": {
                      \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/foo.txt\"
                    },
                    \"html\": {
                      \"href\": \"https://bitbucket.org/snippets/evzijst/kypj#file-foo.txt\"
                    }
                  }
                },
                \"image.png\": {
                  \"links\": {
                    \"self\": {
                      \"href\": \"https://api.bitbucket.org/2.0/snippets/evzijst/kypj/files/367ab19/image.png\"
                    },
                    \"html\": {
                      \"href\": \"https://bitbucket.org/snippets/evzijst/kypj#file-image.png\"
                    }
                  }
                }
              ],
              \"owner\": {
                \"username\": \"evzijst\",
                \"nickname\": \"evzijst\",
                \"display_name\": \"Erik van Zijst\",
                \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/users/evzijst\"
                  },
                  \"html\": {
                    \"href\": \"https://bitbucket.org/evzijst\"
                  },
                  \"avatar\": {
                    \"href\": \"https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\"
                  }
                }
              },
              \"creator\": {
                \"username\": \"evzijst\",
                \"nickname\": \"evzijst\",
                \"display_name\": \"Erik van Zijst\",
                \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/users/evzijst\"
                  },
                  \"html\": {
                    \"href\": \"https://bitbucket.org/evzijst\"
                  },
                  \"avatar\": {
                    \"href\": \"https://bitbucket-staging-assetroot.s3.amazonaws.com/c/photos/2013/Jul/31/erik-avatar-725122544-0_avatar.png\"
                  }
                }
              }
            }
        
            --===============1438169132528273974==
            Content-Type: text/plain; charset=\"us-ascii\"
            MIME-Version: 1.0
            Content-Transfer-Encoding: 7bit
            Content-ID: \"foo.txt\"
            Content-Disposition: attachment; filename=\"foo.txt\"
        
            foo
        
            --===============1438169132528273974==
            Content-Type: image/png
            MIME-Version: 1.0
            Content-Transfer-Encoding: base64
            Content-ID: \"image.png\"
            Content-Disposition: attachment; filename=\"image.png\"
        
            iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
            TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
            cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
            EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
            73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
            AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
            --===============1438169132528273974==--
        
        multipart/form-data
        -------------------
        
        As with creating new snippets, `multipart/form-data` can be used as an
        alternative to `multipart/related`. However, the inherently flat
        structure of form-data means that only basic, root-level properties
        can be returned, while nested elements like `links` are omitted:
        
            $ curl -H \"Accept: multipart/form-data\" https://api.bitbucket.org/2.0/snippets/evzijst/kypj
        
        Response:
        
            HTTP/1.1 200 OK
            Content-Length: 951
            Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
        
            ------------------------------63a4b224c59f
            Content-Disposition: form-data; name=\"title\"
            Content-Type: text/plain; charset=\"utf-8\"
        
            My snippet
            ------------------------------63a4b224c59f--
            Content-Disposition: attachment; name=\"file\"; filename=\"foo.txt\"
            Content-Type: text/plain
        
            foo
        
            ------------------------------63a4b224c59f
            Content-Disposition: attachment; name=\"file\"; filename=\"image.png\"
            Content-Transfer-Encoding: base64
            Content-Type: application/octet-stream
        
            iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
            TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
            cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
            EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
            73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
            AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
            ------------------------------5957323a6b76--
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 410:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_comments(self, request: operations.GetSnippetsWorkspaceEncodedIDCommentsRequest) -> operations.GetSnippetsWorkspaceEncodedIDCommentsResponse:
        r"""Used to retrieve a paginated list of all comments for a specific
        snippet.
        
        This resource works identical to commit and pull request comments.
        
        The default sorting is oldest to newest and can be overridden with
        the `sort` query parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/comments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedSnippetComments])
                res.paginated_snippet_comments = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_comments_comment_id_(self, request: operations.GetSnippetsWorkspaceEncodedIDCommentsCommentIDRequest) -> operations.GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse:
        r"""Returns the specific snippet comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_commits(self, request: operations.GetSnippetsWorkspaceEncodedIDCommitsRequest) -> operations.GetSnippetsWorkspaceEncodedIDCommitsResponse:
        r"""Returns the changes (commits) made on this snippet.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/commits", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedSnippetCommit])
                res.paginated_snippet_commit = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_commits_revision_(self, request: operations.GetSnippetsWorkspaceEncodedIDCommitsRevisionRequest) -> operations.GetSnippetsWorkspaceEncodedIDCommitsRevisionResponse:
        r"""Returns the changes made on this snippet in this commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/commits/{revision}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDCommitsRevisionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet_commit = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_files_path_(self, request: operations.GetSnippetsWorkspaceEncodedIDFilesPathRequest) -> operations.GetSnippetsWorkspaceEncodedIDFilesPathResponse:
        r"""Convenience resource for getting to a snippet's raw files without the
        need for first having to retrieve the snippet itself and having to pull
        out the versioned file links.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/files/{path}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDFilesPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            res.headers = r.headers
            
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_watch(self, request: operations.GetSnippetsWorkspaceEncodedIDWatchRequest) -> operations.GetSnippetsWorkspaceEncodedIDWatchResponse:
        r"""Used to check if the current user is watching a specific snippet.
        
        Returns 204 (No Content) if the user is watching the snippet and 404 if
        not.
        
        Hitting this endpoint anonymously always returns a 404.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/watch", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedUsers])
                res.paginated_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_watchers(self, request: operations.GetSnippetsWorkspaceEncodedIDWatchersRequest) -> operations.GetSnippetsWorkspaceEncodedIDWatchersResponse:
        r"""Returns a paginated list of all users watching a specific snippet.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/watchers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDWatchersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedUsers])
                res.paginated_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_node_id_(self, request: operations.GetSnippetsWorkspaceEncodedIDNodeIDRequest) -> operations.GetSnippetsWorkspaceEncodedIDNodeIDResponse:
        r"""Identical to `GET /snippets/encoded_id`, except that this endpoint
        can be used to retrieve the contents of the snippet as it was at an
        older revision, while `/snippets/encoded_id` always returns the
        snippet's current revision.
        
        Note that only the snippet's file contents are versioned, not its
        meta data properties like the title.
        
        Other than that, the two endpoints are identical in behavior.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/{node_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDNodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_node_id_files_path_(self, request: operations.GetSnippetsWorkspaceEncodedIDNodeIDFilesPathRequest) -> operations.GetSnippetsWorkspaceEncodedIDNodeIDFilesPathResponse:
        r"""Retrieves the raw contents of a specific file in the snippet. The
        `Content-Disposition` header will be \"attachment\" to avoid issues with
        malevolent executable files.
        
        The file's mime type is derived from its filename and returned in the
        `Content-Type` header.
        
        Note that for text files, no character encoding is included as part of
        the content type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/{node_id}/files/{path}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDNodeIDFilesPathResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_revision_diff(self, request: operations.GetSnippetsWorkspaceEncodedIDRevisionDiffRequest) -> operations.GetSnippetsWorkspaceEncodedIDRevisionDiffResponse:
        r"""Returns the diff of the specified commit against its first parent.
        
        Note that this resource is different in functionality from the `patch`
        resource.
        
        The differences between a diff and a patch are:
        
        * patches have a commit header with the username, message, etc
        * diffs support the optional `path=foo/bar.py` query param to filter the
          diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
          its first parent (identical to how PRs work), while patch returns a
          response containing separate patches for each commit on the second
          parent's ancestry, up to the oldest common ancestor (identical to
          its reachability).
        
        Note that the character encoding of the contents of the diff is
        unspecified as Git does not track this, making it hard for
        Bitbucket to reliably determine this.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/{revision}/diff", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDRevisionDiffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_snippets_workspace_encoded_id_revision_patch(self, request: operations.GetSnippetsWorkspaceEncodedIDRevisionPatchRequest) -> operations.GetSnippetsWorkspaceEncodedIDRevisionPatchResponse:
        r"""Returns the patch of the specified commit against its first
        parent.
        
        Note that this resource is different in functionality from the `diff`
        resource.
        
        The differences between a diff and a patch are:
        
        * patches have a commit header with the username, message, etc
        * diffs support the optional `path=foo/bar.py` query param to filter the
          diff to just that one file diff (not supported for patches)
        * for a merge, the diff will show the diff between the merge commit and
          its first parent (identical to how PRs work), while patch returns a
          response containing separate patches for each commit on the second
          parent's ancestry, up to the oldest common ancestor (identical to
          its reachability).
        
        Note that the character encoding of the contents of the patch is
        unspecified as Git does not track this, making it hard for
        Bitbucket to reliably determine this.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/{revision}/patch", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSnippetsWorkspaceEncodedIDRevisionPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_snippets(self, request: operations.PostSnippetsRequest) -> operations.PostSnippetsResponse:
        r"""Creates a new snippet under the authenticated user's account.
        
        Snippets can contain multiple files. Both text and binary files are
        supported.
        
        The simplest way to create a new snippet from a local file:
        
            $ curl -u username:password -X POST https://api.bitbucket.org/2.0/snippets               -F file=@image.png
        
        Creating snippets through curl has a few limitations and so let's look
        at a more complicated scenario.
        
        Snippets are created with a multipart POST. Both `multipart/form-data`
        and `multipart/related` are supported. Both allow the creation of
        snippets with both meta data (title, etc), as well as multiple text
        and binary files.
        
        The main difference is that `multipart/related` can use rich encoding
        for the meta data (currently JSON).
        
        
        multipart/related (RFC-2387)
        ----------------------------
        
        This is the most advanced and efficient way to create a paste.
        
            POST /2.0/snippets/evzijst HTTP/1.1
            Content-Length: 1188
            Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"
            MIME-Version: 1.0
        
            --===============1438169132528273974==
            Content-Type: application/json; charset=\"utf-8\"
            MIME-Version: 1.0
            Content-ID: snippet
        
            {
              \"title\": \"My snippet\",
              \"is_private\": true,
              \"scm\": \"hg\",
              \"files\": {
                  \"foo.txt\": {},
                  \"image.png\": {}
                }
            }
        
            --===============1438169132528273974==
            Content-Type: text/plain; charset=\"us-ascii\"
            MIME-Version: 1.0
            Content-Transfer-Encoding: 7bit
            Content-ID: \"foo.txt\"
            Content-Disposition: attachment; filename=\"foo.txt\"
        
            foo
        
            --===============1438169132528273974==
            Content-Type: image/png
            MIME-Version: 1.0
            Content-Transfer-Encoding: base64
            Content-ID: \"image.png\"
            Content-Disposition: attachment; filename=\"image.png\"
        
            iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAABD0lEQVR4Ae3VMUoDQRTG8ccUaW2m
            TKONFxArJYJamCvkCnZTaa+VnQdJSBFl2SMsLFrEWNjZBZs0JgiL/+KrhhVmJRbCLPx4O+/DT2TB
            cbblJxf+UWFVVRNsEGAtgvJxnLm2H+A5RQ93uIl+3632PZyl/skjfOn9Gvdwmlcw5aPUwimG+NT5
            EnNN036IaZePUuIcK533NVfal7/5yjWeot2z9ta1cAczHEf7I+3J0ws9Cgx0fsOFpmlfwKcWPuBQ
            73Oc4FHzBaZ8llq4q1mr5B2mOUCt815qYR8eB1hG2VJ7j35q4RofaH7IG+Xrf/PfJhfmwtfFYoIN
            AqxFUD6OMxcvkO+UfKfkOyXfKdsv/AYCHMLVkHAFWgAAAABJRU5ErkJggg==
            --===============1438169132528273974==--
        
        The request contains multiple parts and is structured as follows.
        
        The first part is the JSON document that describes the snippet's
        properties or meta data. It either has to be the first part, or the
        request's `Content-Type` header must contain the `start` parameter to
        point to it.
        
        The remaining parts are the files of which there can be zero or more.
        Each file part should contain the `Content-ID` MIME header through
        which the JSON meta data's `files` element addresses it. The value
        should be the name of the file.
        
        `Content-Disposition` is an optional MIME header. The header's
        optional `filename` parameter can be used to specify the file name
        that Bitbucket should use when writing the file to disk. When present,
        `filename` takes precedence over the value of `Content-ID`.
        
        When the JSON body omits the `files` element, the remaining parts are
        not ignored. Instead, each file is added to the new snippet as if its
        name was explicitly linked (the use of the `files` elements is
        mandatory for some operations like deleting or renaming files).
        
        
        multipart/form-data
        -------------------
        
        The use of JSON for the snippet's meta data is optional. Meta data can
        also be supplied as regular form fields in a more conventional
        `multipart/form-data` request:
        
            $ curl -X POST -u credentials https://api.bitbucket.org/2.0/snippets               -F title=\"My snippet\"               -F file=@foo.txt -F file=@image.png
        
            POST /2.0/snippets HTTP/1.1
            Content-Length: 951
            Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
        
            ------------------------------63a4b224c59f
            Content-Disposition: form-data; name=\"file\"; filename=\"foo.txt\"
            Content-Type: text/plain
        
            foo
        
            ------------------------------63a4b224c59f
            Content-Disposition: form-data; name=\"file\"; filename=\"image.png\"
            Content-Type: application/octet-stream
        
            ?PNG
        
            IHDR?1??I.....
            ------------------------------63a4b224c59f
            Content-Disposition: form-data; name=\"title\"
        
            My snippet
            ------------------------------63a4b224c59f--
        
        Here the meta data properties are included as flat, top-level form
        fields. The file attachments use the `file` field name. To attach
        multiple files, simply repeat the field.
        
        The advantage of `multipart/form-data` over `multipart/related` is
        that it can be easier to build clients.
        
        Essentially all properties are optional, `title` and `files` included.
        
        
        Sharing and Visibility
        ----------------------
        
        Snippets can be either public (visible to anyone on Bitbucket, as well
        as anonymous users), or private (visible only to members of the workspace).
        This is controlled through the snippet's `is_private` element:
        
        * **is_private=false** -- everyone, including anonymous users can view
          the snippet
        * **is_private=true** -- only workspace members can view the snippet
        
        To create the snippet under a workspace, just append the workspace ID
        to the URL. See [`/2.0/snippets/{workspace}`](./snippets/%7Bworkspace%7D#post).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/snippets"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSnippetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_snippets_workspace_(self, request: operations.PostSnippetsWorkspaceRequest) -> operations.PostSnippetsWorkspaceResponse:
        r"""Identical to [`/snippets`](../snippets#post), except that the new snippet will be
        created under the workspace specified in the path parameter
        `{workspace}`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSnippetsWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_snippets_workspace_encoded_id_comments(self, request: operations.PostSnippetsWorkspaceEncodedIDCommentsRequest) -> operations.PostSnippetsWorkspaceEncodedIDCommentsResponse:
        r"""Creates a new comment.
        
        The only required field in the body is `content.raw`.
        
        To create a threaded reply to an existing comment, include `parent.id`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSnippetsWorkspaceEncodedIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_snippets_workspace_encoded_id_(self, request: operations.PutSnippetsWorkspaceEncodedIDRequest) -> operations.PutSnippetsWorkspaceEncodedIDResponse:
        r"""Used to update a snippet. Use this to add and delete files and to
        change a snippet's title.
        
        To update a snippet, one can either PUT a full snapshot, or only the
        parts that need to be changed.
        
        The contract for PUT on this API is that properties missing from the
        request remain untouched so that snippets can be efficiently
        manipulated with differential payloads.
        
        To delete a property (e.g. the title, or a file), include its name in
        the request, but omit its value (use `null`).
        
        As in Git, explicit renaming of files is not supported. Instead, to
        rename a file, delete it and add it again under another name. This can
        be done atomically in a single request. Rename detection is left to
        the SCM.
        
        PUT supports three different content types for both request and
        response bodies:
        
        * `application/json`
        * `multipart/related`
        * `multipart/form-data`
        
        The content type used for the request body can be different than that
        used for the response. Content types are specified using standard HTTP
        headers.
        
        Use the `Content-Type` and `Accept` headers to select the desired
        request and response format.
        
        
        application/json
        ----------------
        
        As with creation and retrieval, the content type determines what
        properties can be manipulated. `application/json` does not support
        file contents and is therefore limited to a snippet's meta data.
        
        To update the title, without changing any of its files:
        
            $ curl -X POST -H \"Content-Type: application/json\" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{\"title\": \"Updated title\"}'
        
        
        To delete the title:
        
            $ curl -X POST -H \"Content-Type: application/json\" https://api.bitbucket.org/2.0/snippets/evzijst/kypj             -d '{\"title\": null}'
        
        Not all parts of a snippet can be manipulated. The owner and creator
        for instance are immutable.
        
        
        multipart/related
        -----------------
        
        `multipart/related` can be used to manipulate all of a snippet's
        properties. The body is identical to a POST. properties omitted from
        the request are left unchanged. Since the `start` part contains JSON,
        the mechanism for manipulating the snippet's meta data is identical
        to `application/json` requests.
        
        To update one of a snippet's file contents, while also changing its
        title:
        
            PUT /2.0/snippets/evzijst/kypj HTTP/1.1
            Content-Length: 288
            Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"
            MIME-Version: 1.0
        
            --===============1438169132528273974==
            Content-Type: application/json; charset=\"utf-8\"
            MIME-Version: 1.0
            Content-ID: snippet
        
            {
              \"title\": \"My updated snippet\",
              \"files\": {
                  \"foo.txt\": {}
                }
            }
        
            --===============1438169132528273974==
            Content-Type: text/plain; charset=\"us-ascii\"
            MIME-Version: 1.0
            Content-Transfer-Encoding: 7bit
            Content-ID: \"foo.txt\"
            Content-Disposition: attachment; filename=\"foo.txt\"
        
            Updated file contents.
        
            --===============1438169132528273974==--
        
        Here only the parts that are changed are included in the body. The
        other files remain untouched.
        
        Note the use of the `files` list in the JSON part. This list contains
        the files that are being manipulated. This list should have
        corresponding multiparts in the request that contain the new contents
        of these files.
        
        If a filename in the `files` list does not have a corresponding part,
        it will be deleted from the snippet, as shown below:
        
            PUT /2.0/snippets/evzijst/kypj HTTP/1.1
            Content-Length: 188
            Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"
            MIME-Version: 1.0
        
            --===============1438169132528273974==
            Content-Type: application/json; charset=\"utf-8\"
            MIME-Version: 1.0
            Content-ID: snippet
        
            {
              \"files\": {
                \"image.png\": {}
              }
            }
        
            --===============1438169132528273974==--
        
        To simulate a rename, delete a file and add the same file under
        another name:
        
            PUT /2.0/snippets/evzijst/kypj HTTP/1.1
            Content-Length: 212
            Content-Type: multipart/related; start=\"snippet\"; boundary=\"===============1438169132528273974==\"
            MIME-Version: 1.0
        
            --===============1438169132528273974==
            Content-Type: application/json; charset=\"utf-8\"
            MIME-Version: 1.0
            Content-ID: snippet
        
            {
                \"files\": {
                  \"foo.txt\": {},
                  \"bar.txt\": {}
                }
            }
        
            --===============1438169132528273974==
            Content-Type: text/plain; charset=\"us-ascii\"
            MIME-Version: 1.0
            Content-Transfer-Encoding: 7bit
            Content-ID: \"bar.txt\"
            Content-Disposition: attachment; filename=\"bar.txt\"
        
            foo
        
            --===============1438169132528273974==--
        
        
        multipart/form-data
        -----------------
        
        Again, one can also use `multipart/form-data` to manipulate file
        contents and meta data atomically.
        
            $ curl -X PUT http://localhost:12345/2.0/snippets/evzijst/kypj             -F title=\"My updated snippet\" -F file=@foo.txt
        
            PUT /2.0/snippets/evzijst/kypj HTTP/1.1
            Content-Length: 351
            Content-Type: multipart/form-data; boundary=----------------------------63a4b224c59f
        
            ------------------------------63a4b224c59f
            Content-Disposition: form-data; name=\"file\"; filename=\"foo.txt\"
            Content-Type: text/plain
        
            foo
        
            ------------------------------63a4b224c59f
            Content-Disposition: form-data; name=\"title\"
        
            My updated snippet
            ------------------------------63a4b224c59f
        
        To delete a file, omit its contents while including its name in the
        `files` field:
        
            $ curl -X PUT https://api.bitbucket.org/2.0/snippets/evzijst/kypj -F files=image.png
        
            PUT /2.0/snippets/evzijst/kypj HTTP/1.1
            Content-Length: 149
            Content-Type: multipart/form-data; boundary=----------------------------ef8871065a86
        
            ------------------------------ef8871065a86
            Content-Disposition: form-data; name=\"files\"
        
            image.png
            ------------------------------ef8871065a86--
        
        The explicit use of the `files` element in `multipart/related` and
        `multipart/form-data` is only required when deleting files.
        The default mode of operation is for file parts to be processed,
        regardless of whether or not they are listed in `files`, as a
        convenience to the client.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSnippetsWorkspaceEncodedIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_snippets_workspace_encoded_id_comments_comment_id_(self, request: operations.PutSnippetsWorkspaceEncodedIDCommentsCommentIDRequest) -> operations.PutSnippetsWorkspaceEncodedIDCommentsCommentIDResponse:
        r"""Updates a comment.
        
        Comments can only be updated by their author.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/comments/{comment_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSnippetsWorkspaceEncodedIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_snippets_workspace_encoded_id_watch(self, request: operations.PutSnippetsWorkspaceEncodedIDWatchRequest) -> operations.PutSnippetsWorkspaceEncodedIDWatchResponse:
        r"""Used to start watching a specific snippet. Returns 204 (No Content).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/watch", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSnippetsWorkspaceEncodedIDWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedUsers])
                res.paginated_users = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_snippets_workspace_encoded_id_node_id_(self, request: operations.PutSnippetsWorkspaceEncodedIDNodeIDRequest) -> operations.PutSnippetsWorkspaceEncodedIDNodeIDResponse:
        r"""Identical to `UPDATE /snippets/encoded_id`, except that this endpoint
        takes an explicit commit revision. Only the snippet's \"HEAD\"/\"tip\"
        (most recent) version can be updated and requests on all other,
        older revisions fail by returning a 405 status.
        
        Usage of this endpoint over the unrestricted `/snippets/encoded_id`
        could be desired if the caller wants to be sure no concurrent
        modifications have taken place between the moment of the UPDATE
        request and the original GET.
        
        This can be considered a so-called \"Compare And Swap\", or CAS
        operation.
        
        Other than that, the two endpoints are identical in behavior.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/snippets/{workspace}/{encoded_id}/{node_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSnippetsWorkspaceEncodedIDNodeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.snippet = out
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 405:
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/related"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    