import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Deployments:
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

    
    def create_environment(self, request: operations.CreateEnvironmentRequest) -> operations.CreateEnvironmentResponse:
        r"""Create an environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/environments/", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateEnvironmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deployment_environment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_environment_for_repository(self, request: operations.DeleteEnvironmentForRepositoryRequest) -> operations.DeleteEnvironmentForRepositoryResponse:
        r"""Delete an environment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEnvironmentForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repositories_workspace_repo_slug_deploy_keys_key_id_(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
        r"""This deletes a deploy key from a repository.
        
        Example:
        ```
        $ curl -XDELETE \
        -H \"Authorization <auth header>\" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_deployment_for_repository(self, request: operations.GetDeploymentForRepositoryRequest) -> operations.GetDeploymentForRepositoryResponse:
        r"""Retrieve a deployment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deployments/{deployment_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeploymentForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deployment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_deployments_for_repository(self, request: operations.GetDeploymentsForRepositoryRequest) -> operations.GetDeploymentsForRepositoryResponse:
        r"""Find deployments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deployments/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeploymentsForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedDeployments])
                res.paginated_deployments = out

        return res

    
    def get_environment_for_repository(self, request: operations.GetEnvironmentForRepositoryRequest) -> operations.GetEnvironmentForRepositoryResponse:
        r"""Retrieve an environment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deployment_environment = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_environments_for_repository(self, request: operations.GetEnvironmentsForRepositoryRequest) -> operations.GetEnvironmentsForRepositoryResponse:
        r"""Find environments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/environments/", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEnvironmentsForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedEnvironments])
                res.paginated_environments = out

        return res

    
    def get_repositories_workspace_repo_slug_deploy_keys(self, request: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysRequest) -> operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse:
        r"""Returns all deploy-keys belonging to a repository.
        
        Example:
        ```
        $ curl -H \"Authorization <auth header>\" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys
        
        Output:
        {
            \"pagelen\": 10,
            \"values\": [
                {
                    \"id\": 123,
                    \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",
                    \"label\": \"mykey\",
                    \"type\": \"deploy_key\",
                    \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",
                    \"repository\": {
                        \"full_name\": \"mleu/test\",
                        \"name\": \"test\",
                        \"type\": \"repository\",
                        \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
                    },
                    \"links\":{
                        \"self\":{
                            \"href\": \"https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123\"
                        }
                    }
                    \"last_used\": null,
                    \"comment\": \"mleu@C02W454JHTD8\"
                }
            ],
            \"page\": 1,
            \"size\": 1
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deploy-keys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugDeployKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedDeployKeys])
                res.paginated_deploy_keys = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_deploy_keys_key_id_(self, request: operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
        r"""Returns the deploy key belonging to a specific key.
        
        Example:
        ```
        $ curl -H \"Authorization <auth header>\" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234
        
        Output:
        {
            \"comment\": \"mleu@C02W454JHTD8\",
            \"last_used\": null,
            \"links\": {
                \"self\": {
                    \"href\": https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-key/1234\"
                }
            },
            \"repository\": {
                \"full_name\": \"mleu/test\",
                \"name\": \"test\",
                \"type\": \"repository\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
            },
            \"label\": \"mykey\",
            \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",
            \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",
            \"id\": 1234,
            \"type\": \"deploy_key\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deploy_key = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_deploy_keys(self, request: operations.PostRepositoriesWorkspaceRepoSlugDeployKeysRequest) -> operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse:
        r"""Create a new deploy key in a repository. Note: If authenticating a deploy key
        with an OAuth consumer, any changes to the OAuth consumer will subsequently
        invalidate the deploy key.
        
        
        Example:
        ```
        $ curl -XPOST \
        -H \"Authorization <auth header>\" \
        -H \"Content-type: application/json\" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys -d \
        '{
            \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 mleu@C02W454JHTD8\",
            \"label\": \"mydeploykey\"
        }'
        
        Output:
        {
            \"id\": 123,
            \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",
            \"label\": \"mydeploykey\",
            \"type\": \"deploy_key\",
            \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",
            \"repository\": {
                \"full_name\": \"mleu/test\",
                \"name\": \"test\",
                \"type\": \"repository\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
            },
            \"links\":{
                \"self\":{
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/123\"
                }
            }
            \"last_used\": null,
            \"comment\": \"mleu@C02W454JHTD8\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deploy-keys", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugDeployKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deploy_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_repositories_workspace_repo_slug_deploy_keys_key_id_(self, request: operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDRequest) -> operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse:
        r"""Create a new deploy key in a repository.
        
        The same key needs to be passed in but the comment and label can change.
        
        Example:
        ```
        $ curl -XPUT \
        -H \"Authorization <auth header>\" \
        -H \"Content-type: application/json\" \
        https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234 -d \
        '{
            \"label\": \"newlabel\",
            \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5 newcomment\",
        }'
        
        Output:
        {
            \"comment\": \"newcomment\",
            \"last_used\": null,
            \"links\": {
                \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/mleu/test/deploy-keys/1234\"
                }
            },
            \"repository\": {
                \"full_name\": \"mleu/test\",
                \"name\": \"test\",
                \"type\": \"repository\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
            },
            \"label\": \"newlabel\",
            \"created_on\": \"2018-08-15T23:50:59.993890+00:00\",
            \"key\": \"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDAK/b1cHHDr/TEV1JGQl+WjCwStKG6Bhrv0rFpEsYlyTBm1fzN0VOJJYn4ZOPCPJwqse6fGbXntEs+BbXiptR+++HycVgl65TMR0b5ul5AgwrVdZdT7qjCOCgaSV74/9xlHDK8oqgGnfA7ZoBBU+qpVyaloSjBdJfLtPY/xqj4yHnXKYzrtn/uFc4Kp9Tb7PUg9Io3qohSTGJGVHnsVblq/rToJG7L5xIo0OxK0SJSQ5vuId93ZuFZrCNMXj8JDHZeSEtjJzpRCBEXHxpOPhAcbm4MzULgkFHhAVgp4JbkrT99/wpvZ7r9AdkTg7HGqL3rlaDrEcWfL7Lu6TnhBdq5\",
            \"id\": 1234,
            \"type\": \"deploy_key\"
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/deploy-keys/{key_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.deploy_key = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def update_environment_for_repository(self, request: operations.UpdateEnvironmentForRepositoryRequest) -> operations.UpdateEnvironmentForRepositoryResponse:
        r"""Update an environment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/environments/{environment_uuid}/changes/", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEnvironmentForRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    