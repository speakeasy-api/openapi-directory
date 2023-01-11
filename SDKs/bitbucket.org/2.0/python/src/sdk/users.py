import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def get_user(self, request: operations.GetUserRequest) -> operations.GetUserResponse:
        r"""Returns the currently logged in user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.user = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_user_emails(self, request: operations.GetUserEmailsRequest) -> operations.GetUserEmailsResponse:
        r"""Returns all the authenticated user's email addresses. Both
        confirmed and unconfirmed.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/emails"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserEmailsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_user_emails_email_(self, request: operations.GetUserEmailsEmailRequest) -> operations.GetUserEmailsEmailResponse:
        r"""Returns details about a specific one of the authenticated user's
        email addresses.
        
        Details describe whether the address has been confirmed by the user and
        whether it is the user's primary address or not.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/emails/{email}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserEmailsEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_users_selected_user_(self, request: operations.GetUsersSelectedUserRequest) -> operations.GetUsersSelectedUserResponse:
        r"""Gets the public information associated with a user account.
        
        If the user's profile is private, `location`, `website` and
        `created_on` elements are omitted.
        
        Note that the user object returned by this operation is changing significantly, due to privacy changes.
        See the [announcement](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-changes-gdpr/#changes-to-bitbucket-user-objects) for details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersSelectedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.user = out
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

    
    def get_users_username_members(self, request: operations.GetUsersUsernameMembersRequest) -> operations.GetUsersUsernameMembersResponse:
        r"""**This endpoint has been deprecated,
        and you should use the [workspaces](../../workspaces/%7Bworkspace%7D/members) endpoint.
        For more information, see [this post](https://developer.atlassian.com/cloud/bitbucket/bitbucket-api-teams-deprecation/).**
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/members", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersUsernameMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.user = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

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

    