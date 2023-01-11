import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Webhooks:
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

    
    def delete_repositories_workspace_repo_slug_hooks_uid_(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse:
        r"""Deletes the specified webhook subscription from the given
        repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_users_selected_user_hooks_uid_(self, request: operations.DeleteUsersSelectedUserHooksUIDRequest) -> operations.DeleteUsersSelectedUserHooksUIDResponse:
        r"""Deletes the specified webhook subscription from the given user
        account.
        
        Note that the username path parameter has been deprecated due to
        [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
        Use the account's UUID or account_id instead.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#delete) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUsersSelectedUserHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_workspaces_workspace_hooks_uid_(self, request: operations.DeleteWorkspacesWorkspaceHooksUIDRequest) -> operations.DeleteWorkspacesWorkspaceHooksUIDResponse:
        r"""Deletes the specified webhook subscription from the given workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspacesWorkspaceHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_hook_events(self, request: operations.GetHookEventsRequest) -> operations.GetHookEventsResponse:
        r"""Returns the webhook resource or subject types on which webhooks can
        be registered.
        
        Each resource/subject type contains an `events` link that returns the
        paginated list of specific events each individual subject type can
        emit.
        
        This endpoint is publicly accessible and does not require
        authentication or scopes.
        
        Example:
        
        ```
        $ curl https://api.bitbucket.org/2.0/hook_events
        
        {
            \"repository\": {
                \"links\": {
                    \"events\": {
                        \"href\": \"https://api.bitbucket.org/2.0/hook_events/repository\"
                    }
                }
            },
            \"team\": {
                \"links\": {
                    \"events\": {
                        \"href\": \"https://api.bitbucket.org/2.0/hook_events/team\"
                    }
                }
            },
            \"user\": {
                \"links\": {
                    \"events\": {
                        \"href\": \"https://api.bitbucket.org/2.0/hook_events/user\"
                    }
                }
            }
        }
        ```
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/hook_events"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHookEventsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SubjectTypes])
                res.subject_types = out

        return res

    
    def get_hook_events_subject_type_(self, request: operations.GetHookEventsSubjectTypeRequest) -> operations.GetHookEventsSubjectTypeResponse:
        r"""Returns a paginated list of all valid webhook events for the
        specified entity.
        **The team and user webhooks are deprecated, and you should use workspace instead.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        
        This is public data that does not require any scopes or authentication.
        
        Example:
        
        NOTE: The following example is a truncated response object for the `workspace` `subject_type`.
        We return the same structure for the other `subject_type` objects.
        
        ```
        $ curl https://api.bitbucket.org/2.0/hook_events/workspace
        {
            \"page\": 1,
            \"pagelen\": 30,
            \"size\": 21,
            \"values\": [
                {
                    \"category\": \"Repository\",
                    \"description\": \"Whenever a repository push occurs\",
                    \"event\": \"repo:push\",
                    \"label\": \"Push\"
                },
                {
                    \"category\": \"Repository\",
                    \"description\": \"Whenever a repository fork occurs\",
                    \"event\": \"repo:fork\",
                    \"label\": \"Fork\"
                },
                {
                    \"category\": \"Repository\",
                    \"description\": \"Whenever a repository import occurs\",
                    \"event\": \"repo:imported\",
                    \"label\": \"Import\"
                },
                ...
                {
                    \"category\":\"Pull Request\",
                    \"label\":\"Approved\",
                    \"description\":\"When someone has approved a pull request\",
                    \"event\":\"pullrequest:approved\"
                },
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/hook_events/{subject_type}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHookEventsSubjectTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedHookEvents])
                res.paginated_hook_events = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_hooks(self, request: operations.GetRepositoriesWorkspaceRepoSlugHooksRequest) -> operations.GetRepositoriesWorkspaceRepoSlugHooksResponse:
        r"""Returns a paginated list of webhooks installed on this repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugHooksResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_repositories_workspace_repo_slug_hooks_uid_(self, request: operations.GetRepositoriesWorkspaceRepoSlugHooksUIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugHooksUIDResponse:
        r"""Returns the webhook with the specified id installed on the specified
        repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_subscription = out
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

    
    def get_users_selected_user_hooks(self, request: operations.GetUsersSelectedUserHooksRequest) -> operations.GetUsersSelectedUserHooksResponse:
        r"""Returns a paginated list of webhooks installed on this user account.
        
        Note that the username path parameter has been deprecated due to
        [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
        Use the account's UUID or account_id instead.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#get) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersSelectedUserHooksResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_users_selected_user_hooks_uid_(self, request: operations.GetUsersSelectedUserHooksUIDRequest) -> operations.GetUsersSelectedUserHooksUIDResponse:
        r"""Returns the webhook with the specified id installed on the given
        user account.
        
        Note that the username path parameter has been deprecated due to
        [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
        Use the account's UUID or account_id instead.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#get) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersSelectedUserHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_subscription = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_workspaces_workspace_hooks(self, request: operations.GetWorkspacesWorkspaceHooksRequest) -> operations.GetWorkspacesWorkspaceHooksResponse:
        r"""Returns a paginated list of webhooks installed on this workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspaceHooksResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_workspaces_workspace_hooks_uid_(self, request: operations.GetWorkspacesWorkspaceHooksUIDRequest) -> operations.GetWorkspacesWorkspaceHooksUIDResponse:
        r"""Returns the webhook with the specified id installed on the given
        workspace.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspaceHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.webhook_subscription = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_hooks(self, request: operations.PostRepositoriesWorkspaceRepoSlugHooksRequest) -> operations.PostRepositoriesWorkspaceRepoSlugHooksResponse:
        r"""Creates a new webhook on the specified repository.
        
        Example:
        
        ```
        $ curl -X POST -u credentials -H 'Content-Type: application/json'
          https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo-slug/hooks
          -d '
            {
              \"description\": \"Webhook Description\",
              \"url\": \"https://example.com/\",
              \"active\": true,
              \"events\": [
                \"repo:push\",
                \"issue:created\",
                \"issue:updated\"
              ]
            }'
        ```
        
        Note that this call requires the webhook scope, as well as any scope
        that applies to the events that the webhook subscribes to. In the
        example above that means: `webhook`, `repository` and `issue`.
        
        Also note that the `url` must properly resolve and cannot be an
        internal, non-routed address.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugHooksResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_users_selected_user_hooks(self, request: operations.PostUsersSelectedUserHooksRequest) -> operations.PostUsersSelectedUserHooksResponse:
        r"""Creates a new webhook on the specified user account.
        
        Account-level webhooks are fired for events from all repositories
        belonging to that account.
        
        Note that one can only register webhooks on one's own account, not that
        of others.
        
        Also, note that the username path parameter has been deprecated due to
        [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
        Use the account's UUID or account_id instead.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hooks](../../workspaces/%7Bworkspace%7D/hooks#post) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostUsersSelectedUserHooksResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_workspaces_workspace_hooks(self, request: operations.PostWorkspacesWorkspaceHooksRequest) -> operations.PostWorkspacesWorkspaceHooksResponse:
        r"""Creates a new webhook on the specified workspace.
        
        Workspace webhooks are fired for events from all repositories contained
        by that workspace.
        
        Note that only owners can install webhooks on workspaces.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/hooks", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostWorkspacesWorkspaceHooksResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def put_repositories_workspace_repo_slug_hooks_uid_(self, request: operations.PutRepositoriesWorkspaceRepoSlugHooksUIDRequest) -> operations.PutRepositoriesWorkspaceRepoSlugHooksUIDResponse:
        r"""Updates the specified webhook subscription.
        
        The following properties can be mutated:
        
        * `description`
        * `url`
        * `active`
        * `events`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def put_users_selected_user_hooks_uid_(self, request: operations.PutUsersSelectedUserHooksUIDRequest) -> operations.PutUsersSelectedUserHooksUIDResponse:
        r"""Updates the specified webhook subscription.
        
        The following properties can be mutated:
        
        * `description`
        * `url`
        * `active`
        * `events`
        
        Note that the username path parameter has been deprecated due to
        [privacy changes](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#removal-of-usernames-from-user-referencing-apis).
        Use the account's UUID or account_id instead.
        
        **This endpoint has been deprecated, and you should
        use the new [workspace hook details](../../../workspaces/%7Bworkspace%7D/hooks/%7Buid%7D#put) endpoint.
        For more information, see [the announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUsersSelectedUserHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def put_workspaces_workspace_hooks_uid_(self, request: operations.PutWorkspacesWorkspaceHooksUIDRequest) -> operations.PutWorkspacesWorkspaceHooksUIDResponse:
        r"""Updates the specified webhook subscription.
        
        The following properties can be mutated:
        
        * `description`
        * `url`
        * `active`
        * `events`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/hooks/{uid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutWorkspacesWorkspaceHooksUIDResponse(status_code=r.status_code, content_type=content_type)
        
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

    