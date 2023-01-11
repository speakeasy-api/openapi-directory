import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def delete_teams_username_projects_project_key_(self, request: operations.DeleteTeamsUsernameProjectsProjectKeyRequest) -> operations.DeleteTeamsUsernameProjectsProjectKeyResponse:
        r"""**This endpoint has been deprecated,
        and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#delete) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/projects/{project_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTeamsUsernameProjectsProjectKeyResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_workspaces_workspace_projects_project_key_(self, request: operations.DeleteWorkspacesWorkspaceProjectsProjectKeyRequest) -> operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse:
        r"""Deletes this project. This is an irreversible operation.
        
        You cannot delete a project that still contains repositories.
        To delete the project, [delete](../../../repositories/%7Bworkspace%7D/%7Brepo_slug%7D#delete)
        or transfer the repositories first.
        
        Example:
        ```
        $ curl -X DELETE https://api.bitbucket.org/2.0/bbworkspace1/PROJ
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/projects/{project_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspacesWorkspaceProjectsProjectKeyResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_teams_username_projects_(self, request: operations.GetTeamsUsernameProjectsRequest) -> operations.GetTeamsUsernameProjectsResponse:
        r"""**This endpoint has been deprecated,
        and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#get) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/projects/", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedProjects])
                res.paginated_projects = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_projects_project_key_(self, request: operations.GetTeamsUsernameProjectsProjectKeyRequest) -> operations.GetTeamsUsernameProjectsProjectKeyResponse:
        r"""**This endpoint has been deprecated,
        and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#get) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/projects/{project_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameProjectsProjectKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_workspaces_workspace_projects_project_key_(self, request: operations.GetWorkspacesWorkspaceProjectsProjectKeyRequest) -> operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse:
        r"""Returns the requested project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/projects/{project_key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspaceProjectsProjectKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
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

    
    def post_teams_username_projects_(self, request: operations.PostTeamsUsernameProjectsRequest) -> operations.PostTeamsUsernameProjectsResponse:
        r"""Creates a new project.
        
        **This endpoint has been deprecated,
        and you should use the [workspace projects](../../../workspaces/%7Bworkspace%7D/projects#post) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        Note that the avatar has to be embedded as either a data-url
        or a URL to an external image as shown in the examples below:
        
        ```
        $ body=$(cat << EOF
        {
            \"name\": \"Mars Project\",
            \"key\": \"MARS\",
            \"description\": \"Software for colonizing mars.\",
            \"links\": {
                \"avatar\": {
                    \"href\": \"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\"
                }
            },
            \"is_private\": false
        }
        EOF
        )
        $ curl -H \"Content-Type: application/json\" \
               -X POST \
               -d \"$body\" \
               https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
        {
          // Serialized project document
        }
        ```
        
        or even:
        
        ```
        $ body=$(cat << EOF
        {
            \"name\": \"Mars Project\",
            \"key\": \"MARS\",
            \"description\": \"Software for colonizing mars.\",
            \"links\": {
                \"avatar\": {
                    \"href\": \"http://i.imgur.com/72tRx4w.gif\"
                }
            },
            \"is_private\": false
        }
        EOF
        )
        $ curl -H \"Content-Type: application/json\" \
               -X POST \
               -d \"$body\" \
               https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
        {
          // Serialized project document
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/projects/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsUsernameProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_workspaces_workspace_projects(self, request: operations.PostWorkspacesWorkspaceProjectsRequest) -> operations.PostWorkspacesWorkspaceProjectsResponse:
        r"""Creates a new project.
        
        Note that the avatar has to be embedded as either a data-url
        or a URL to an external image as shown in the examples below:
        
        ```
        $ body=$(cat << EOF
        {
            \"name\": \"Mars Project\",
            \"key\": \"MARS\",
            \"description\": \"Software for colonizing mars.\",
            \"links\": {
                \"avatar\": {
                    \"href\": \"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/...\"
                }
            },
            \"is_private\": false
        }
        EOF
        )
        $ curl -H \"Content-Type: application/json\" \
               -X POST \
               -d \"$body\" \
               https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
        {
          // Serialized project document
        }
        ```
        
        or even:
        
        ```
        $ body=$(cat << EOF
        {
            \"name\": \"Mars Project\",
            \"key\": \"MARS\",
            \"description\": \"Software for colonizing mars.\",
            \"links\": {
                \"avatar\": {
                    \"href\": \"http://i.imgur.com/72tRx4w.gif\"
                }
            },
            \"is_private\": false
        }
        EOF
        )
        $ curl -H \"Content-Type: application/json\" \
               -X POST \
               -d \"$body\" \
               https://api.bitbucket.org/2.0/teams/teams-in-space/projects/ | jq .
        {
          // Serialized project document
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/projects", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspacesWorkspaceProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_teams_username_projects_project_key_(self, request: operations.PutTeamsUsernameProjectsProjectKeyRequest) -> operations.PutTeamsUsernameProjectsProjectKeyResponse:
        r"""Since this endpoint can be used to both update and to create a
        project, the request body depends on the intent.
        
        **This endpoint has been deprecated,
        and you should use the [workspace project](../../../workspaces/%7Bworkspace%7D/projects/%7Bproject_key%7D#put) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        ### Creation
        
        See the POST documentation for the project collection for an
        example of the request body.
        
        Note: The `key` should not be specified in the body of request
        (since it is already present in the URL). The `name` is required,
        everything else is optional.
        
        ### Update
        
        See the POST documentation for the project collection for an
        example of the request body.
        
        Note: The key is not required in the body (since it is already in
        the URL). The key may be specified in the body, if the intent is
        to change the key itself. In such a scenario, the location of the
        project is changed and is returned in the `Location` header of the
        response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/projects/{project_key}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTeamsUsernameProjectsProjectKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_workspaces_workspace_projects_project_key_(self, request: operations.PutWorkspacesWorkspaceProjectsProjectKeyRequest) -> operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse:
        r"""Since this endpoint can be used to both update and to create a
        project, the request body depends on the intent.
        
        ### Creation
        
        See the POST documentation for the project collection for an
        example of the request body.
        
        Note: The `key` should not be specified in the body of request
        (since it is already present in the URL). The `name` is required,
        everything else is optional.
        
        ### Update
        
        See the POST documentation for the project collection for an
        example of the request body.
        
        Note: The key is not required in the body (since it is already in
        the URL). The key may be specified in the body, if the intent is
        to change the key itself. In such a scenario, the location of the
        project is changed and is returned in the `Location` header of the
        response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/projects/{project_key}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWorkspacesWorkspaceProjectsProjectKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.project = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    