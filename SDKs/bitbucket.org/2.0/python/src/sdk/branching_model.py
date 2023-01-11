import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class BranchingModel:
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

    
    def get_repositories_workspace_repo_slug_branching_model(self, request: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelRequest) -> operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse:
        r"""Return the branching model as applied to the repository. This view is
        read-only. The branching model settings can be changed using the
        [settings](branching-model/settings#get) API.
        
        The returned object:
        
        1. Always has a `development` property. `development.branch` contains
           the actual repository branch object that is considered to be the
           `development` branch. `development.branch` will not be present
           if it does not exist.
        2. Might have a `production` property. `production` will not
           be present when `production` is disabled.
           `production.branch` contains the actual branch object that is
           considered to be the `production` branch. `production.branch` will
           not be present if it does not exist.
        3. Always has a `branch_types` array which contains all enabled branch
           types.
        
        Example body:
        
        ```
        {
          \"development\": {
            \"name\": \"master\",
            \"branch\": {
              \"type\": \"branch\",
              \"name\": \"master\",
              \"target\": {
                \"hash\": \"16dffcb0de1b22e249db6799532074cf32efe80f\"
              }
            },
            \"use_mainbranch\": true
          },
          \"production\": {
            \"name\": \"production\",
            \"branch\": {
              \"type\": \"branch\",
              \"name\": \"production\",
              \"target\": {
                \"hash\": \"16dffcb0de1b22e249db6799532074cf32efe80f\"
              }
            },
            \"use_mainbranch\": false
          },
          \"branch_types\": [
            {
              \"kind\": \"release\",
              \"prefix\": \"release/\"
            },
            {
              \"kind\": \"hotfix\",
              \"prefix\": \"hotfix/\"
            },
            {
              \"kind\": \"feature\",
              \"prefix\": \"feature/\"
            },
            {
              \"kind\": \"bugfix\",
              \"prefix\": \"bugfix/\"
            }
          ],
          \"type\": \"branching_model\",
          \"links\": {
            \"self\": {
              \"href\": \"https://api.bitbucket.org/.../branching-model\"
            }
          }
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branching-model", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugBranchingModelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.branching_model = out
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

    
    def get_repositories_workspace_repo_slug_branching_model_settings(self, request: operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse:
        r"""Return the branching model configuration for a repository. The returned
        object:
        
        1. Always has a `development` property for the development branch.
        2. Always a `production` property for the production branch. The
           production branch can be disabled.
        3. The `branch_types` contains all the branch types.
        
        This is the raw configuration for the branching model. A client
        wishing to see the branching model with its actual current branches may
        find the [active model API](../branching-model#get) more useful.
        
        Example body:
        
        ```
        {
          \"development\": {
            \"is_valid\": true,
            \"name\": null,
            \"use_mainbranch\": true
          },
          \"production\": {
            \"is_valid\": true,
            \"name\": \"production\",
            \"use_mainbranch\": false,
            \"enabled\": false
          },
          \"branch_types\": [
            {
              \"kind\": \"release\",
              \"enabled\": true,
              \"prefix\": \"release/\"
            },
            {
              \"kind\": \"hotfix\",
              \"enabled\": true,
              \"prefix\": \"hotfix/\"
            },
            {
              \"kind\": \"feature\",
              \"enabled\": true,
              \"prefix\": \"feature/\"
            },
            {
              \"kind\": \"bugfix\",
              \"enabled\": false,
              \"prefix\": \"bugfix/\"
            }
          ],
          \"type\": \"branching_model_settings\",
          \"links\": {
            \"self\": {
              \"href\": \"https://api.bitbucket.org/.../branching-model/settings\"
            }
          }
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branching-model/settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.branching_model_settings = out
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

    
    def put_repositories_workspace_repo_slug_branching_model_settings(self, request: operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsRequest) -> operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse:
        r"""Update the branching model configuration for a repository.
        
        The `development` branch can be configured to a specific branch or to
        track the main branch. When set to a specific branch it must
        currently exist. Only the passed properties will be updated. The
        properties not passed will be left unchanged. A request without a
        `development` property will leave the development branch unchanged.
        
        It is possible for the `development` branch to be invalid. This
        happens when it points at a specific branch that has been
        deleted. This is indicated in the `is_valid` field for the branch. It is
        not possible to update the settings for `development` if that
        would leave the branch in an invalid state. Such a request will be
        rejected.
        
        The `production` branch can be a specific branch, the main
        branch or disabled. When set to a specific branch it must currently
        exist. The `enabled` property can be used to enable (`true`) or
        disable (`false`) it. Only the passed properties will be updated. The
        properties not passed will be left unchanged. A request without a
        `production` property will leave the production branch unchanged.
        
        It is possible for the `production` branch to be invalid. This
        happens when it points at a specific branch that has been
        deleted. This is indicated in the `is_valid` field for the branch. A
        request that would leave `production` enabled and invalid will be
        rejected. It is possible to update `production` and make it invalid if
        it would also be left disabled.
        
        The `branch_types` property contains the branch types to be updated.
        Only the branch types passed will be updated. All updates will be
        rejected if it would leave the branching model in an invalid state.
        For branch types this means that:
        
        1. The prefixes for all enabled branch types are valid. For example,
           it is not possible to use '*' inside a Git prefix.
        2. A prefix of an enabled branch type must not be a prefix of another
           enabled branch type. This is to ensure that a branch can be easily
           classified by its prefix unambiguously.
        
        It is possible to store an invalid prefix if that branch type would be
        left disabled. Only the passed properties will be updated. The
        properties not passed will be left unchanged. Each branch type must
        have a `kind` property to identify it.
        
        Example Body:
        
        ```
            {
              \"development\": {
                \"use_mainbranch\": true
              },
              \"production\": {
                \"enabled\": true,
                \"use_mainbranch\": false,
                \"name\": \"production\"
              },
              \"branch_types\": [
                {
                  \"kind\": \"bugfix\",
                  \"enabled\": true,
                  \"prefix\": \"bugfix/\"
                },
                {
                  \"kind\": \"feature\",
                  \"enabled\": true,
                  \"prefix\": \"feature/\"
                },
                {
                  \"kind\": \"hotfix\",
                  \"prefix\": \"hotfix/\"
                },
                {
                  \"kind\": \"release\",
                  \"enabled\": false,
                }
              ]
            }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branching-model/settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugBranchingModelSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.branching_model_settings = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
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

    