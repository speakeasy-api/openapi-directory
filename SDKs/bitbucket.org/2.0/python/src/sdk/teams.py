import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Teams:
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

    
    def delete_teams_username_hooks_uid_(self, request: operations.DeleteTeamsUsernameHooksUIDRequest) -> operations.DeleteTeamsUsernameHooksUIDResponse:
        r"""Deletes the specified webhook subscription from the given team
        account.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTeamsUsernameHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_teams(self, request: operations.GetTeamsRequest) -> operations.GetTeamsResponse:
        r"""Returns all the teams that the authenticated user is associated
        with.
        
        **This endpoint has been deprecated,
        and you should use the [workspaces](./workspaces) endpoint.
        For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedTeams])
                res.paginated_teams = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_(self, request: operations.GetTeamsUsernameRequest) -> operations.GetTeamsUsernameResponse:
        r"""Gets the public information associated with a team.
        
        If the team's profile is private, `location`, `website` and
        `created_on` elements are omitted.
        
        **This endpoint has been deprecated,
        and you should use the [workspace](../workspaces/%7Bworkspace%7D) endpoint.
        For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.team = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_followers(self, request: operations.GetTeamsUsernameFollowersRequest) -> operations.GetTeamsUsernameFollowersResponse:
        r"""Returns the list of accounts that are following this team.
        
        **This endpoint has been deprecated. There is no workspaces replacement.
        For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/followers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameFollowersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedUsers])
                res.paginated_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_following(self, request: operations.GetTeamsUsernameFollowingRequest) -> operations.GetTeamsUsernameFollowingResponse:
        r"""Returns the list of accounts this team is following.
        
        **This endpoint has been deprecated. There is no workspaces replacement.
        For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/following", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameFollowingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedUsers])
                res.paginated_users = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_hooks(self, request: operations.GetTeamsUsernameHooksRequest) -> operations.GetTeamsUsernameHooksResponse:
        r"""Returns a paginated list of webhooks installed on this team.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameHooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedWebhookSubscriptions])
                res.paginated_webhook_subscriptions = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_hooks_uid_(self, request: operations.GetTeamsUsernameHooksUIDRequest) -> operations.GetTeamsUsernameHooksUIDResponse:
        r"""Returns the webhook with the specified id installed on the given
        team account.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_subscription = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_members(self, request: operations.GetTeamsUsernameMembersRequest) -> operations.GetTeamsUsernameMembersResponse:
        r"""Returns all members of the specified team. Any member of any of the
        team's groups is considered a member of the team. This includes users
        in groups that may not actually have access to any of the team's
        repositories.
        
        **This operation has been deprecated due to privacy changes.
        See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/)
        for details.
        You should this [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint as a replacement.**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/members", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernameMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.user = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_permissions(self, request: operations.GetTeamsUsernamePermissionsRequest) -> operations.GetTeamsUsernamePermissionsResponse:
        r"""Returns an object for each team permission a user on the team has.
        
        **This endpoint has been deprecated,
        and you should use the [workspace permissions](../../workspaces/%7Bworkspace%7D/permissions) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        Permissions returned are effective permissions — if a user is a member of
        multiple groups with distinct roles, only the highest level is returned.
        
        Permissions can be:
        
        * `admin`
        * `collaborator`
        
        Only users with admin permission for the team may access this resource.
        
        Example:
        
        ```
        $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions
        
        {
          \"pagelen\": 10,
          \"values\": [
            {
              \"permission\": \"admin\",
              \"type\": \"team_permission\",
              \"user\": {
                \"type\": \"user\",
                \"nickname\": \"evzijst\",
                \"display_name\": \"Erik van Zijst\",
                \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"
              },
              \"team\": {
                \"display_name\": \"Atlassian Bitbucket\",
                \"uuid\": \"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"
              }
            },
            {
              \"permission\": \"collaborator\",
              \"type\": \"team_permission\",
              \"user\": {
                \"type\": \"user\",
                \"nickname\": \"seanaty\",
                \"display_name\": \"Sean Conaty\",
                \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"
              },
              \"team\": {
                \"display_name\": \"Atlassian Bitbucket\",
                \"uuid\": \"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"
              }
            }
          ],
          \"page\": 1,
          \"size\": 2
        }
        ```
        
        Results may be further [filtered or sorted](../../../meta/filtering) by
        team, user, or permission by adding the following query string
        parameters:
        
        * `q=user.uuid=\"{d301aafa-d676-4ee0-88be-962be7417567}\"` or `q=permission=\"admin\"`
        * `sort=team.display_name`
        
        Note that the query parameter values need to be URL escaped so that `=`
        would become `%3D`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/permissions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernamePermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedTeamPermissions])
                res.paginated_team_permissions = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_permissions_repositories(self, request: operations.GetTeamsUsernamePermissionsRepositoriesRequest) -> operations.GetTeamsUsernamePermissionsRepositoriesResponse:
        r"""Returns an object for each repository permission for all of a
        team’s repositories.
        
        **This endpoint has been deprecated,
        and you should use the [workspace repository permissions](../../../workspaces/%7Bworkspace%7D/permissions/repositories) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        If the username URL parameter refers to a user account instead of
        a team account, an object containing the repository permissions
        of all the username's repositories will be returned.
        
        Permissions returned are effective permissions — the highest level of
        permission the user has. This does not include public repositories that
        users are not granted any specific permission in, and does not
        distinguish between direct and indirect privileges.
        
        Only users with admin permission for the team may access this resource.
        
        Permissions can be:
        
        * `admin`
        * `write`
        * `read`
        
        Example:
        
        ```
        $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories
        
        {
          \"pagelen\": 10,
          \"values\": [
            {
              \"type\": \"repository_permission\",
              \"user\": {
                \"type\": \"user\",
                \"display_name\": \"Erik van Zijst\",
                \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"
              },
              \"repository\": {
                \"type\": \"repository\",
                \"name\": \"geordi\",
                \"full_name\": \"bitbucket/geordi\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
              },
              \"permission\": \"admin\"
            },
            {
              \"type\": \"repository_permission\",
              \"user\": {
                \"type\": \"user\",
                \"display_name\": \"Sean Conaty\",
                \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"
              },
              \"repository\": {
                \"type\": \"repository\",
                \"name\": \"geordi\",
                \"full_name\": \"bitbucket/geordi\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
              },
              \"permission\": \"write\"
            }
          ],
          \"page\": 1,
          \"size\": 2
        }
        ```
        
        Results may be further [filtered or sorted](../../../../meta/filtering)
        by repository, user, or permission by adding the following query string
        parameters:
        
        * `q=repository.name=\"geordi\"` or `q=permission>\"read\"`
        * `sort=user.display_name`
        
        Note that the query parameter values need to be URL escaped so that `=`
        would become `%3D`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/permissions/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernamePermissionsRepositoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedRepositoryPermissions])
                res.paginated_repository_permissions = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_username_permissions_repositories_repo_slug_(self, request: operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugRequest) -> operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse:
        r"""Returns an object for each repository permission of a given repository.
        
        **This endpoint has been deprecated,
        and you should use the [workspace repository permissions](../../../../workspaces/%7Bworkspace%7D/permissions/repositories/%7Brepo_slug%7D) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        If the username URL parameter refers to a user account instead of
        a team account, an object containing the repository permissions
        of the username's repository will be returned.
        
        Permissions returned are effective permissions — the highest level of
        permission the user has. This does not include public repositories that
        users are not granted any specific permission in, and does not
        distinguish between direct and indirect privileges.
        
        Only users with admin permission for the repository may access this resource.
        
        Permissions can be:
        
        * `admin`
        * `write`
        * `read`
        
        Example:
        
        ```
        $ curl https://api.bitbucket.org/2.0/teams/atlassian_tutorial/permissions/repositories/geordi
        
        {
          \"pagelen\": 10,
          \"values\": [
            {
              \"type\": \"repository_permission\",
              \"user\": {
                \"type\": \"user\",
                \"display_name\": \"Erik van Zijst\",
                \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"
              },
              \"repository\": {
                \"type\": \"repository\",
                \"name\": \"geordi\",
                \"full_name\": \"bitbucket/geordi\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
              },
              \"permission\": \"admin\"
            },
            {
              \"type\": \"repository_permission\",
              \"user\": {
                \"type\": \"user\",
                \"display_name\": \"Sean Conaty\",
                \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"
              },
              \"repository\": {
                \"type\": \"repository\",
                \"name\": \"geordi\",
                \"full_name\": \"bitbucket/geordi\",
                \"uuid\": \"{85d08b4e-571d-44e9-a507-fa476535aa98}\"
              },
              \"permission\": \"write\"
            }
          ],
          \"page\": 1,
          \"size\": 2
        }
        ```
        
        Results may be further [filtered or sorted](../../../../meta/filtering)
        by user, or permission by adding the following query string parameters:
        
        * `q=permission>\"read\"`
        * `sort=user.display_name`
        
        Note that the query parameter values need to be URL escaped so that `=`
        would become `%3D`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/permissions/repositories/{repo_slug}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsUsernamePermissionsRepositoriesRepoSlugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedRepositoryPermissions])
                res.paginated_repository_permissions = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_teams_workspace_repositories(self, request: operations.GetTeamsWorkspaceRepositoriesRequest) -> operations.GetTeamsWorkspaceRepositoriesResponse:
        r"""All repositories in the given workspace. This includes any private
        repositories the calling user has access to.
        
        **This endpoint has been deprecated,
        and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
        For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{workspace}/repositories", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTeamsWorkspaceRepositoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_user_permissions_teams(self, request: operations.GetUserPermissionsTeamsRequest) -> operations.GetUserPermissionsTeamsResponse:
        r"""Returns an object for each team the caller is a member of, and their
        effective role — the highest level of privilege the caller has. If a
        user is a member of multiple groups with distinct roles, only the
        highest level is returned.
        
        **This endpoint has been deprecated,
        and you should use the [workspace permissions](./workspaces) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        Permissions can be:
        
        * `admin`
        * `collaborator`
        
        Example:
        
        ```
        $ curl https://api.bitbucket.org/2.0/user/permissions/teams
        
        {
          \"pagelen\": 10,
          \"values\": [
            {
              \"permission\": \"admin\",
              \"type\": \"team_permission\",
              \"user\": {
                \"type\": \"user\",
                \"nickname\": \"evzijst\",
                \"display_name\": \"Erik van Zijst\",
                \"uuid\": \"{d301aafa-d676-4ee0-88be-962be7417567}\"
              },
              \"team\": {
                \"display_name\": \"Atlassian Bitbucket\",
                \"uuid\": \"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"
              }
            }
          ],
          \"page\": 1,
          \"size\": 1
        }
        ```
        
        Results may be further [filtered or sorted](../../../meta/filtering) by
        team or permission by adding the following query string parameters:
        
        * `q=team.uuid=\"{4cc6108a-a241-4db0-96a5-64347ac04f87}\"` or `q=permission=\"admin\"`
        * `sort=team.display_name`
        
        Note that the query parameter values need to be URL escaped so that `=`
        would become `%3D`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/permissions/teams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserPermissionsTeamsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedTeamPermissions])
                res.paginated_team_permissions = out

        return res

    
    def get_users_workspace_repositories(self, request: operations.GetUsersWorkspaceRepositoriesRequest) -> operations.GetUsersWorkspaceRepositoriesResponse:
        r"""All repositories in the given workspace. This includes any private
        repositories the calling user has access to.
        
        **This endpoint has been deprecated,
        and you should use the [repository list](../../repositories/%7Bworkspace%7D) endpoint.
        For more information, see the [deprecation announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{workspace}/repositories", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersWorkspaceRepositoriesResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_teams_username_hooks(self, request: operations.PostTeamsUsernameHooksRequest) -> operations.PostTeamsUsernameHooksResponse:
        r"""Creates a new webhook on the specified team.
        
        Team webhooks are fired for events from all repositories belonging to
        that team account.
        
        Note that only admins can install webhooks on teams.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTeamsUsernameHooksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_subscription = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_teams_username_hooks_uid_(self, request: operations.PutTeamsUsernameHooksUIDRequest) -> operations.PutTeamsUsernameHooksUIDResponse:
        r"""Updates the specified webhook subscription.
        
        The following properties can be mutated:
        
        * `description`
        * `url`
        * `active`
        * `events`
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTeamsUsernameHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_subscription = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    