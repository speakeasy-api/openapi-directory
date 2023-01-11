import requests
from sdk.models import operations
from . import utils

class Properties:
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

    
    def delete_commit_hosted_property_value(self, request: operations.DeleteCommitHostedPropertyValueRequest) -> operations.DeleteCommitHostedPropertyValueResponse:
        r"""Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCommitHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_pull_request_hosted_property_value(self, request: operations.DeletePullRequestHostedPropertyValueRequest) -> operations.DeletePullRequestHostedPropertyValueResponse:
        r"""Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePullRequestHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_repository_hosted_property_value(self, request: operations.DeleteRepositoryHostedPropertyValueRequest) -> operations.DeleteRepositoryHostedPropertyValueResponse:
        r"""Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoryHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_user_hosted_property_value(self, request: operations.DeleteUserHostedPropertyValueRequest) -> operations.DeleteUserHostedPropertyValueResponse:
        r"""Delete an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_commit_hosted_property_value(self, request: operations.GetCommitHostedPropertyValueRequest) -> operations.GetCommitHostedPropertyValueResponse:
        r"""Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCommitHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_pull_request_hosted_property_value(self, request: operations.GetPullRequestHostedPropertyValueRequest) -> operations.GetPullRequestHostedPropertyValueResponse:
        r"""Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPullRequestHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_repository_hosted_property_value(self, request: operations.GetRepositoryHostedPropertyValueRequest) -> operations.GetRepositoryHostedPropertyValueResponse:
        r"""Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoryHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def retrieve_user_hosted_property_value(self, request: operations.RetrieveUserHostedPropertyValueRequest) -> operations.RetrieveUserHostedPropertyValueResponse:
        r"""Retrieve an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveUserHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def update_commit_hosted_property_value(self, request: operations.UpdateCommitHostedPropertyValueRequest) -> operations.UpdateCommitHostedPropertyValueResponse:
        r"""Update an [application property](/cloud/bitbucket/application-properties/) value stored against a commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCommitHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_pull_request_hosted_property_value(self, request: operations.UpdatePullRequestHostedPropertyValueRequest) -> operations.UpdatePullRequestHostedPropertyValueResponse:
        r"""Update an [application property](/cloud/bitbucket/application-properties/) value stored against a pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePullRequestHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_repository_hosted_property_value(self, request: operations.UpdateRepositoryHostedPropertyValueRequest) -> operations.UpdateRepositoryHostedPropertyValueResponse:
        r"""Update an [application property](/cloud/bitbucket/application-properties/) value stored against a repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRepositoryHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_user_hosted_property_value(self, request: operations.UpdateUserHostedPropertyValueRequest) -> operations.UpdateUserHostedPropertyValueResponse:
        r"""Update an [application property](/cloud/bitbucket/application-properties/) value stored against a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/properties/{app_key}/{property_name}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserHostedPropertyValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    