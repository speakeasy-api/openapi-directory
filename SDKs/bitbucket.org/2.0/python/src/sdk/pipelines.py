import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Pipelines:
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

    
    def create_deployment_variable(self, request: operations.CreateDeploymentVariableRequest) -> operations.CreateDeploymentVariableResponse:
        r"""Create a deployment environment level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDeploymentVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deployment_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_pipeline_for_repository(self, request: operations.CreatePipelineForRepositoryRequest) -> operations.CreatePipelineForRepositoryResponse:
        r"""Endpoint to create and initiate a pipeline.
        There are a couple of different options to initiate a pipeline, where the payload of the request will determine which type of pipeline will be instantiated.
        # Trigger a Pipeline for a branch
        One way to trigger pipelines is by specifying the branch for which you want to trigger a pipeline.
        The specified branch will be used to determine which pipeline definition from the `bitbucket-pipelines.yml` file will be applied to initiate the pipeline. The pipeline will then do a clone of the repository and checkout the latest revision of the specified branch.
        
        ### Example
        
        ```
        $ curl -X POST -is -u username:password \
          -H 'Content-Type: application/json' \
         https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
          -d '
          {
            \"target\": {
              \"ref_type\": \"branch\",
              \"type\": \"pipeline_ref_target\",
              \"ref_name\": \"master\"
            }
          }'
        ```
        # Trigger a Pipeline for a commit on a branch or tag
        You can initiate a pipeline for a specific commit and in the context of a specified reference (e.g. a branch, tag or bookmark).
        The specified reference will be used to determine which pipeline definition from the bitbucket-pipelines.yml file will be applied to initiate the pipeline. The pipeline will clone the repository and then do a checkout the specified reference.
        
        The following reference types are supported:
        
        * `branch`
        * `named_branch`
        * `bookmark`
         * `tag`
        
        ### Example
        
        ```
        $ curl -X POST -is -u username:password \
          -H 'Content-Type: application/json' \
          https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
          -d '
          {
            \"target\": {
              \"commit\": {
                \"type\": \"commit\",
                \"hash\": \"ce5b7431602f7cbba007062eeb55225c6e18e956\"
              },
              \"ref_type\": \"branch\",
              \"type\": \"pipeline_ref_target\",
              \"ref_name\": \"master\"
            }
          }'
        ```
        # Trigger a specific pipeline definition for a commit
        You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit.
        In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition. The resulting pipeline will then clone the repository and checkout the specified revision.
        
        ### Example
        
        ```
        $ curl -X POST -is -u username:password \
          -H 'Content-Type: application/json' \
         https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
         -d '
          {
             \"target\": {
              \"commit\": {
                 \"hash\":\"a3c4e02c9a3755eccdc3764e6ea13facdf30f923\",
                 \"type\":\"commit\"
               },
                \"selector\": {
                   \"type\":\"custom\",
                      \"pattern\":\"Deploy to production\"
                  },
                \"type\":\"pipeline_commit_target\"
           }
          }'
        ```
        # Trigger a specific pipeline definition for a commit on a branch or tag
        You can trigger a specific pipeline that is defined in your `bitbucket-pipelines.yml` file for a specific commit in the context of a specified reference.
        In addition to the commit revision, you specify the type and pattern of the selector that identifies the pipeline definition, as well as the reference information. The resulting pipeline will then clone the repository a checkout the specified reference.
        
        ### Example
        
        ```
        $ curl -X POST -is -u username:password \
          -H 'Content-Type: application/json' \
         https://api.bitbucket.org/2.0/repositories/jeroendr/meat-demo2/pipelines/ \
         -d '
          {
             \"target\": {
              \"commit\": {
                 \"hash\":\"a3c4e02c9a3755eccdc3764e6ea13facdf30f923\",
                 \"type\":\"commit\"
               },
               \"selector\": {
                  \"type\": \"custom\",
                  \"pattern\": \"Deploy to production\"
               },
               \"type\": \"pipeline_ref_target\",
               \"ref_name\": \"master\",
               \"ref_type\": \"branch\"
             }
          }'
        ```
        
        
        # Trigger a custom pipeline with variables
        In addition to triggering a custom pipeline that is defined in your `bitbucket-pipelines.yml` file as shown in the examples above, you can specify variables that will be available for your build. In the request, provide a list of variables, specifying the following for each variable: key, value, and whether it should be secured or not (this field is optional and defaults to not secured).
        
        ### Example
        
        ```
        $ curl -X POST -is -u username:password \
          -H 'Content-Type: application/json' \
         https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
         -d '
          {
            \"target\": {
              \"type\": \"pipeline_ref_target\",
              \"ref_type\": \"branch\",
              \"ref_name\": \"master\",
              \"selector\": {
                \"type\": \"custom\",
                \"pattern\": \"Deploy to production\"
              }
            },
            \"variables\": [
              {
                \"key\": \"var1key\",
                \"value\": \"var1value\",
                \"secured\": true
              },
              {
                \"key\": \"var2key\",
                \"value\": \"var2value\"
              }
            ]
          }'
        ```
        
        # Trigger a pull request pipeline
        
        You can also initiate a pipeline for a specific pull request.
        
        ### Example
        
        ```
        $ curl -X POST -is -u username:password \
          -H 'Content-Type: application/json' \
         https://api.bitbucket.org/2.0/repositories/{workspace}/{repo_slug}/pipelines/ \
         -d '
          {
        	\"target\": {
              \"type\": \"pipeline_pullrequest_target\",
        	  \"source\": \"pull-request-branch\",
              \"destination\": \"master\",
              \"destination_commit\": {
              	 \"hash\" : \"9f848b7\"
              },
              \"commit\": {
              	\"hash\" : \"1a372fc\"
              },
              \"pullrequest\" : {
              	\"id\" : \"3\"
              },
        	  \"selector\": {
                \"type\": \"pull-requests\",
                \"pattern\": \"**\"
              }
            }
          }'
        ```
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePipelineForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_pipeline_variable_for_team(self, request: operations.CreatePipelineVariableForTeamRequest) -> operations.CreatePipelineVariableForTeamResponse:
        r"""Create an account level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/pipelines_config/variables/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePipelineVariableForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_pipeline_variable_for_user(self, request: operations.CreatePipelineVariableForUserRequest) -> operations.CreatePipelineVariableForUserResponse:
        r"""Create a user level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/pipelines_config/variables/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePipelineVariableForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_pipeline_variable_for_workspace(self, request: operations.CreatePipelineVariableForWorkspaceRequest) -> operations.CreatePipelineVariableForWorkspaceResponse:
        r"""Create a workspace level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/variables", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePipelineVariableForWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_repository_pipeline_known_host(self, request: operations.CreateRepositoryPipelineKnownHostRequest) -> operations.CreateRepositoryPipelineKnownHostResponse:
        r"""Create a repository level known host.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRepositoryPipelineKnownHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_known_host = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_repository_pipeline_schedule(self, request: operations.CreateRepositoryPipelineScheduleRequest) -> operations.CreateRepositoryPipelineScheduleResponse:
        r"""Create a schedule for the given repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRepositoryPipelineScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_schedule = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def create_repository_pipeline_variable(self, request: operations.CreateRepositoryPipelineVariableRequest) -> operations.CreateRepositoryPipelineVariableResponse:
        r"""Create a repository level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRepositoryPipelineVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_deployment_variable(self, request: operations.DeleteDeploymentVariableRequest) -> operations.DeleteDeploymentVariableResponse:
        r"""Delete a deployment environment level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeploymentVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_pipeline_variable_for_team(self, request: operations.DeletePipelineVariableForTeamRequest) -> operations.DeletePipelineVariableForTeamResponse:
        r"""Delete a team level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePipelineVariableForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_pipeline_variable_for_user(self, request: operations.DeletePipelineVariableForUserRequest) -> operations.DeletePipelineVariableForUserResponse:
        r"""Delete an account level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePipelineVariableForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_pipeline_variable_for_workspace(self, request: operations.DeletePipelineVariableForWorkspaceRequest) -> operations.DeletePipelineVariableForWorkspaceResponse:
        r"""Delete a workspace level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePipelineVariableForWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repository_pipeline_cache(self, request: operations.DeleteRepositoryPipelineCacheRequest) -> operations.DeleteRepositoryPipelineCacheResponse:
        r"""Delete a repository cache.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoryPipelineCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repository_pipeline_key_pair(self, request: operations.DeleteRepositoryPipelineKeyPairRequest) -> operations.DeleteRepositoryPipelineKeyPairResponse:
        r"""Delete the repository SSH key pair.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoryPipelineKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repository_pipeline_known_host(self, request: operations.DeleteRepositoryPipelineKnownHostRequest) -> operations.DeleteRepositoryPipelineKnownHostResponse:
        r"""Delete a repository level known host.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoryPipelineKnownHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repository_pipeline_schedule(self, request: operations.DeleteRepositoryPipelineScheduleRequest) -> operations.DeleteRepositoryPipelineScheduleResponse:
        r"""Delete a schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoryPipelineScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repository_pipeline_variable(self, request: operations.DeleteRepositoryPipelineVariableRequest) -> operations.DeleteRepositoryPipelineVariableResponse:
        r"""Delete a repository level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoryPipelineVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_deployment_variables(self, request: operations.GetDeploymentVariablesRequest) -> operations.GetDeploymentVariablesResponse:
        r"""Find deployment environment level variables.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeploymentVariablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedDeploymentVariable])
                res.paginated_deployment_variable = out

        return res

    
    def get_pipeline_for_repository(self, request: operations.GetPipelineForRepositoryRequest) -> operations.GetPipelineForRepositoryResponse:
        r"""Retrieve a specified pipeline
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pipeline_step_for_repository(self, request: operations.GetPipelineStepForRepositoryRequest) -> operations.GetPipelineStepForRepositoryResponse:
        r"""Retrieve a given step of a pipeline.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineStepForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_step = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pipeline_step_log_for_repository(self, request: operations.GetPipelineStepLogForRepositoryRequest) -> operations.GetPipelineStepLogForRepositoryResponse:
        r"""Retrieve the log file for a given step of a pipeline.
        
        This endpoint supports (and encourages!) the use of [HTTP Range requests](https://tools.ietf.org/html/rfc7233) to deal with potentially very large log files.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/{step_uuid}/log", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineStepLogForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content
        elif r.status_code == 416:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.body = r.content

        return res

    
    def get_pipeline_steps_for_repository(self, request: operations.GetPipelineStepsForRepositoryRequest) -> operations.GetPipelineStepsForRepositoryResponse:
        r"""Find steps for the given pipeline.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/steps/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineStepsForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineSteps])
                res.paginated_pipeline_steps = out

        return res

    
    def get_pipeline_variable_for_team(self, request: operations.GetPipelineVariableForTeamRequest) -> operations.GetPipelineVariableForTeamResponse:
        r"""Retrieve a team level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineVariableForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pipeline_variable_for_user(self, request: operations.GetPipelineVariableForUserRequest) -> operations.GetPipelineVariableForUserResponse:
        r"""Retrieve a user level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineVariableForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pipeline_variable_for_workspace(self, request: operations.GetPipelineVariableForWorkspaceRequest) -> operations.GetPipelineVariableForWorkspaceResponse:
        r"""Retrieve a workspace level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineVariableForWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pipeline_variables_for_team(self, request: operations.GetPipelineVariablesForTeamRequest) -> operations.GetPipelineVariablesForTeamResponse:
        r"""Find account level variables.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/pipelines_config/variables/", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineVariablesForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineVariables])
                res.paginated_pipeline_variables = out

        return res

    
    def get_pipeline_variables_for_user(self, request: operations.GetPipelineVariablesForUserRequest) -> operations.GetPipelineVariablesForUserResponse:
        r"""Find user level variables.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/pipelines_config/variables/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineVariablesForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineVariables])
                res.paginated_pipeline_variables = out

        return res

    
    def get_pipeline_variables_for_workspace(self, request: operations.GetPipelineVariablesForWorkspaceRequest) -> operations.GetPipelineVariablesForWorkspaceResponse:
        r"""Find workspace level variables.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/variables", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelineVariablesForWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineVariables])
                res.paginated_pipeline_variables = out

        return res

    
    def get_pipelines_for_repository(self, request: operations.GetPipelinesForRepositoryRequest) -> operations.GetPipelinesForRepositoryResponse:
        r"""Find pipelines
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPipelinesForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelines])
                res.paginated_pipelines = out

        return res

    
    def get_repository_pipeline_cache_content_uri(self, request: operations.GetRepositoryPipelineCacheContentURIRequest) -> operations.GetRepositoryPipelineCacheContentURIResponse:
        r"""Retrieve the URI of the content of the specified cache.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/{cache_uuid}/content-uri", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineCacheContentURIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PipelineCacheContentURI])
                res.pipeline_cache_content_uri = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_caches(self, request: operations.GetRepositoryPipelineCachesRequest) -> operations.GetRepositoryPipelineCachesResponse:
        r"""Retrieve the repository pipelines caches.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines-config/caches/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineCachesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineCaches])
                res.paginated_pipeline_caches = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_config(self, request: operations.GetRepositoryPipelineConfigRequest) -> operations.GetRepositoryPipelineConfigResponse:
        r"""Retrieve the repository pipelines configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipelines_config = out

        return res

    
    def get_repository_pipeline_known_host(self, request: operations.GetRepositoryPipelineKnownHostRequest) -> operations.GetRepositoryPipelineKnownHostResponse:
        r"""Retrieve a repository level known host.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineKnownHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_known_host = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_known_hosts(self, request: operations.GetRepositoryPipelineKnownHostsRequest) -> operations.GetRepositoryPipelineKnownHostsResponse:
        r"""Find repository level known hosts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineKnownHostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineKnownHosts])
                res.paginated_pipeline_known_hosts = out

        return res

    
    def get_repository_pipeline_schedule(self, request: operations.GetRepositoryPipelineScheduleRequest) -> operations.GetRepositoryPipelineScheduleResponse:
        r"""Retrieve a schedule by its UUID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_schedule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_schedule_executions(self, request: operations.GetRepositoryPipelineScheduleExecutionsRequest) -> operations.GetRepositoryPipelineScheduleExecutionsResponse:
        r"""Retrieve the executions of a given schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}/executions/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineScheduleExecutionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineScheduleExecutions])
                res.paginated_pipeline_schedule_executions = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_schedules(self, request: operations.GetRepositoryPipelineSchedulesRequest) -> operations.GetRepositoryPipelineSchedulesResponse:
        r"""Retrieve the configured schedules for the given repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineSchedulesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineSchedules])
                res.paginated_pipeline_schedules = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_ssh_key_pair(self, request: operations.GetRepositoryPipelineSSHKeyPairRequest) -> operations.GetRepositoryPipelineSSHKeyPairResponse:
        r"""Retrieve the repository SSH key pair excluding the SSH private key. The private key is a write only field and will never be exposed in the logs or the REST API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineSSHKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_ssh_key_pair = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_variable(self, request: operations.GetRepositoryPipelineVariableRequest) -> operations.GetRepositoryPipelineVariableResponse:
        r"""Retrieve a repository level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repository_pipeline_variables(self, request: operations.GetRepositoryPipelineVariablesRequest) -> operations.GetRepositoryPipelineVariablesResponse:
        r"""Find repository level variables.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryPipelineVariablesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPipelineVariables])
                res.paginated_pipeline_variables = out

        return res

    
    def stop_pipeline(self, request: operations.StopPipelineRequest) -> operations.StopPipelineResponse:
        r"""Signal the stop of a pipeline and all of its steps that not have completed yet.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines/{pipeline_uuid}/stopPipeline", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.StopPipelineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_deployment_variable(self, request: operations.UpdateDeploymentVariableRequest) -> operations.UpdateDeploymentVariableResponse:
        r"""Update a deployment environment level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deployments_config/environments/{environment_uuid}/variables/{variable_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDeploymentVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deployment_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_pipeline_variable_for_team(self, request: operations.UpdatePipelineVariableForTeamRequest) -> operations.UpdatePipelineVariableForTeamResponse:
        r"""Update a team level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePipelineVariableForTeamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_pipeline_variable_for_user(self, request: operations.UpdatePipelineVariableForUserRequest) -> operations.UpdatePipelineVariableForUserResponse:
        r"""Update a user level variable.
        This endpoint has been deprecated, and you should use the new workspaces endpoint. For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePipelineVariableForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_pipeline_variable_for_workspace(self, request: operations.UpdatePipelineVariableForWorkspaceRequest) -> operations.UpdatePipelineVariableForWorkspaceResponse:
        r"""Update a workspace level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/pipelines-config/variables/{variable_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePipelineVariableForWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_repository_build_number(self, request: operations.UpdateRepositoryBuildNumberRequest) -> operations.UpdateRepositoryBuildNumberResponse:
        r"""Update the next build number that should be assigned to a pipeline. The next build number that will be configured has to be strictly higher than the current latest build number for this repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/build_number", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryBuildNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_build_number = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_repository_pipeline_config(self, request: operations.UpdateRepositoryPipelineConfigRequest) -> operations.UpdateRepositoryPipelineConfigResponse:
        r"""Update the pipelines configuration for a repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryPipelineConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipelines_config = out

        return res

    
    def update_repository_pipeline_key_pair(self, request: operations.UpdateRepositoryPipelineKeyPairRequest) -> operations.UpdateRepositoryPipelineKeyPairResponse:
        r"""Create or update the repository SSH key pair. The private key will be set as a default SSH identity in your build container.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/key_pair", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryPipelineKeyPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_ssh_key_pair = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_repository_pipeline_known_host(self, request: operations.UpdateRepositoryPipelineKnownHostRequest) -> operations.UpdateRepositoryPipelineKnownHostResponse:
        r"""Update a repository level known host.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/ssh/known_hosts/{known_host_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryPipelineKnownHostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_known_host = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_repository_pipeline_schedule(self, request: operations.UpdateRepositoryPipelineScheduleRequest) -> operations.UpdateRepositoryPipelineScheduleResponse:
        r"""Update a schedule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/schedules/{schedule_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryPipelineScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_schedule = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_repository_pipeline_variable(self, request: operations.UpdateRepositoryPipelineVariableRequest) -> operations.UpdateRepositoryPipelineVariableResponse:
        r"""Update a repository level variable.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pipelines_config/variables/{variable_uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryPipelineVariableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pipeline_variable = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    