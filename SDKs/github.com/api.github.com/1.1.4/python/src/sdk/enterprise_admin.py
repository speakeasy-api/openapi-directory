import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class EnterpriseAdmin:
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

    
    def enterprise_admin_add_org_access_to_self_hosted_runner_group_in_enterprise(self, request: operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) -> operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
        r"""Add organization access to a self-hosted runner group in an enterprise
        Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see \"[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminAddOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_add_self_hosted_runner_to_group_for_enterprise(self, request: operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseRequest) -> operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse:
        r"""Add a self-hosted runner to a group for an enterprise
        Adds a self-hosted runner to a runner group configured in an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise`
        scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#add-a-self-hosted-runner-to-a-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminAddSelfHostedRunnerToGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_create_registration_token_for_enterprise(self, request: operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseRequest) -> operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse:
        r"""Create a registration token for an enterprise
        Returns a token that you can pass to the `config` script. The token expires after one hour.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        
        #### Example using registration token
        
        Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
        
        ```
        ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
        ```
        https://docs.github.com/rest/reference/enterprise-admin#create-a-registration-token-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runners/registration-token", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateRegistrationTokenForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationToken])
                res.authentication_token = out

        return res

    
    def enterprise_admin_create_remove_token_for_enterprise(self, request: operations.EnterpriseAdminCreateRemoveTokenForEnterpriseRequest) -> operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse:
        r"""Create a remove token for an enterprise
        Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        
        #### Example using remove token
        
        To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
        endpoint.
        
        ```
        ./config.sh remove --token TOKEN
        ```
        https://docs.github.com/rest/reference/enterprise-admin#create-a-remove-token-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runners/remove-token", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateRemoveTokenForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AuthenticationToken])
                res.authentication_token = out

        return res

    
    def enterprise_admin_create_self_hosted_runner_group_for_enterprise(self, request: operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseRequest) -> operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse:
        r"""Create a self-hosted runner group for an enterprise
        Creates a new self-hosted runner group for an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#create-self-hosted-runner-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminCreateSelfHostedRunnerGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunnerGroupsEnterprise])
                res.runner_groups_enterprise = out

        return res

    
    def enterprise_admin_delete_scim_group_from_enterprise(self, request: operations.EnterpriseAdminDeleteScimGroupFromEnterpriseRequest) -> operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse:
        r"""Delete a SCIM group from an enterprise
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteScimGroupFromEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_self_hosted_runner_from_enterprise(self, request: operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest) -> operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse:
        r"""Delete a self-hosted runner from an enterprise
        Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#delete-self-hosted-runner-from-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_self_hosted_runner_group_from_enterprise(self, request: operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest) -> operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse:
        r"""Delete a self-hosted runner group from an enterprise
        Deletes a self-hosted runner group for an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#delete-a-self-hosted-runner-group-from-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_delete_user_from_enterprise(self, request: operations.EnterpriseAdminDeleteUserFromEnterpriseRequest) -> operations.EnterpriseAdminDeleteUserFromEnterpriseResponse:
        r"""Delete a SCIM user from an enterprise
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDeleteUserFromEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_disable_selected_organization_github_actions_enterprise(self, request: operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseRequest) -> operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse:
        r"""Disable a selected organization for GitHub Actions in an enterprise
        Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#disable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminDisableSelectedOrganizationGithubActionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_enable_selected_organization_github_actions_enterprise(self, request: operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseRequest) -> operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse:
        r"""Enable a selected organization for GitHub Actions in an enterprise
        Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#enable-a-selected-organization-for-github-actions-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions/organizations/{org_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminEnableSelectedOrganizationGithubActionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_get_allowed_actions_enterprise(self, request: operations.EnterpriseAdminGetAllowedActionsEnterpriseRequest) -> operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse:
        r"""Get allowed actions for an enterprise
        Gets the selected actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#get-allowed-actions-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetAllowedActionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SelectedActions])
                res.selected_actions = out

        return res

    
    def enterprise_admin_get_github_actions_permissions_enterprise(self, request: operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseRequest) -> operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse:
        r"""Get GitHub Actions permissions for an enterprise
        Gets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#get-github-actions-permissions-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetGithubActionsPermissionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsEnterprisePermissions])
                res.actions_enterprise_permissions = out

        return res

    
    def enterprise_admin_get_provisioning_information_for_enterprise_group(self, request: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupRequest) -> operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse:
        r"""Get SCIM provisioning information for an enterprise group
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetProvisioningInformationForEnterpriseGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseGroup])
                res.scim_enterprise_group = out

        return res

    
    def enterprise_admin_get_provisioning_information_for_enterprise_user(self, request: operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserRequest) -> operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse:
        r"""Get SCIM provisioning information for an enterprise user
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetProvisioningInformationForEnterpriseUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseUser])
                res.scim_enterprise_user = out

        return res

    
    def enterprise_admin_get_self_hosted_runner_for_enterprise(self, request: operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseRequest) -> operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse:
        r"""Get a self-hosted runner for an enterprise
        Gets a specific self-hosted runner configured in an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetSelfHostedRunnerForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Runner])
                res.runner = out

        return res

    
    def enterprise_admin_get_self_hosted_runner_group_for_enterprise(self, request: operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest) -> operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse:
        r"""Get a self-hosted runner group for an enterprise
        Gets a specific self-hosted runner group for an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#get-a-self-hosted-runner-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunnerGroupsEnterprise])
                res.runner_groups_enterprise = out

        return res

    
    def enterprise_admin_list_org_access_to_self_hosted_runner_group_in_enterprise(self, request: operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) -> operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
        r"""List organization access to a self-hosted runner group in an enterprise
        Lists the organizations with access to a self-hosted runner group.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON])
                res.enterprise_admin_list_org_access_to_self_hosted_runner_group_in_enterprise_200_application_json_object = out

        return res

    
    def enterprise_admin_list_provisioned_groups_enterprise(self, request: operations.EnterpriseAdminListProvisionedGroupsEnterpriseRequest) -> operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse:
        r"""List provisioned SCIM groups for an enterprise
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListProvisionedGroupsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimGroupListEnterprise])
                res.scim_group_list_enterprise = out

        return res

    
    def enterprise_admin_list_provisioned_identities_enterprise(self, request: operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseRequest) -> operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse:
        r"""List SCIM provisioned identities for an enterprise
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
        
        When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
          - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
          - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
          - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
        
        The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
        
        1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
        
        1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
        
        1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
           - If the user signs in, their GitHub account is linked to this entry.
           - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
        https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListProvisionedIdentitiesEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimUserListEnterprise])
                res.scim_user_list_enterprise = out

        return res

    
    def enterprise_admin_list_runner_applications_for_enterprise(self, request: operations.EnterpriseAdminListRunnerApplicationsForEnterpriseRequest) -> operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse:
        r"""List runner applications for an enterprise
        Lists binaries for the runner application that you can download and run.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#list-runner-applications-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runners/downloads", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListRunnerApplicationsForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RunnerApplication]])
                res.runner_applications = out

        return res

    
    def enterprise_admin_list_selected_organizations_enabled_github_actions_enterprise(self, request: operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest) -> operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
        r"""List selected organizations enabled for GitHub Actions in an enterprise
        Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#list-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions/organizations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON])
                res.enterprise_admin_list_selected_organizations_enabled_github_actions_enterprise_200_application_json_object = out

        return res

    
    def enterprise_admin_list_self_hosted_runner_groups_for_enterprise(self, request: operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest) -> operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse:
        r"""List self-hosted runner groups for an enterprise
        Lists all self-hosted runner groups for an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runner-groups-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON])
                res.enterprise_admin_list_self_hosted_runner_groups_for_enterprise_200_application_json_object = out

        return res

    
    def enterprise_admin_list_self_hosted_runners_for_enterprise(self, request: operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest) -> operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse:
        r"""List self-hosted runners for an enterprise
        Lists all self-hosted runners configured for an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON])
                res.enterprise_admin_list_self_hosted_runners_for_enterprise_200_application_json_object = out

        return res

    
    def enterprise_admin_list_self_hosted_runners_in_group_for_enterprise(self, request: operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest) -> operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse:
        r"""List self-hosted runners in a group for an enterprise
        Lists the self-hosted runners that are in a specific enterprise group.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#list-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON])
                res.enterprise_admin_list_self_hosted_runners_in_group_for_enterprise_200_application_json_object = out

        return res

    
    def enterprise_admin_provision_and_invite_enterprise_group(self, request: operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest) -> operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse:
        r"""Provision a SCIM enterprise group and invite users
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
        https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Groups", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseGroup])
                res.scim_enterprise_group = out

        return res

    
    def enterprise_admin_provision_and_invite_enterprise_user(self, request: operations.EnterpriseAdminProvisionAndInviteEnterpriseUserRequest) -> operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse:
        r"""Provision and invite a SCIM enterprise user
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Provision enterprise membership for a user, and send organization invitation emails to the email address.
        
        You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
        https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Users", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminProvisionAndInviteEnterpriseUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseUser])
                res.scim_enterprise_user = out

        return res

    
    def enterprise_admin_remove_org_access_to_self_hosted_runner_group_in_enterprise(self, request: operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) -> operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
        r"""Remove organization access to a self-hosted runner group in an enterprise
        Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see \"[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations/{org_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminRemoveOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_remove_self_hosted_runner_from_group_for_enterprise(self, request: operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseRequest) -> operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse:
        r"""Remove a self-hosted runner from a group for an enterprise
        Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#remove-a-self-hosted-runner-from-a-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners/{runner_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminRemoveSelfHostedRunnerFromGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_set_allowed_actions_enterprise(self, request: operations.EnterpriseAdminSetAllowedActionsEnterpriseRequest) -> operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse:
        r"""Set allowed actions for an enterprise
        Sets the actions that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#set-allowed-actions-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions/selected-actions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetAllowedActionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_set_github_actions_permissions_enterprise(self, request: operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseRequest) -> operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse:
        r"""Set GitHub Actions permissions for an enterprise
        Sets the GitHub Actions permissions policy for organizations and allowed actions in an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#set-github-actions-permissions-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetGithubActionsPermissionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_set_information_for_provisioned_enterprise_group(self, request: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest) -> operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse:
        r"""Set SCIM information for a provisioned enterprise group
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
        https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseGroup])
                res.scim_enterprise_group = out

        return res

    
    def enterprise_admin_set_information_for_provisioned_enterprise_user(self, request: operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest) -> operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse:
        r"""Set SCIM information for a provisioned enterprise user
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
        
        You must at least provide the required values for the user: `userName`, `name`, and `emails`.
        
        **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
        https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseUser])
                res.scim_enterprise_user = out

        return res

    
    def enterprise_admin_set_org_access_to_self_hosted_runner_group_in_enterprise(self, request: operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest) -> operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse:
        r"""Set organization access for a self-hosted runner group in an enterprise
        Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_set_selected_organizations_enabled_github_actions_enterprise(self, request: operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseRequest) -> operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse:
        r"""Set selected organizations enabled for GitHub Actions in an enterprise
        Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see \"[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise).\"
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#set-selected-organizations-enabled-for-github-actions-in-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/permissions/organizations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetSelectedOrganizationsEnabledGithubActionsEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_set_self_hosted_runners_in_group_for_enterprise(self, request: operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseRequest) -> operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse:
        r"""Set self-hosted runners in a group for an enterprise
        Replaces the list of self-hosted runners that are part of an enterprise runner group.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#set-self-hosted-runners-in-a-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminSetSelfHostedRunnersInGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def enterprise_admin_update_attribute_for_enterprise_group(self, request: operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupRequest) -> operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse:
        r"""Update an attribute for a SCIM enterprise group
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
        https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Groups/{scim_group_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateAttributeForEnterpriseGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseGroup])
                res.scim_enterprise_group = out

        return res

    
    def enterprise_admin_update_attribute_for_enterprise_user(self, request: operations.EnterpriseAdminUpdateAttributeForEnterpriseUserRequest) -> operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse:
        r"""Update an attribute for a SCIM enterprise user
        **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
        
        Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
        
        **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `\"path\": \"emails[type eq \\"work\\"]\"` will not work.
        
        **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
        
        ```
        {
          \"Operations\":[{
            \"op\":\"replace\",
            \"value\":{
              \"active\":false
            }
          }]
        }
        ```
        https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/enterprises/{enterprise}/Users/{scim_user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateAttributeForEnterpriseUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimEnterpriseUser])
                res.scim_enterprise_user = out

        return res

    
    def enterprise_admin_update_self_hosted_runner_group_for_enterprise(self, request: operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseRequest) -> operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse:
        r"""Update a self-hosted runner group for an enterprise
        Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
        
        You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
        https://docs.github.com/rest/reference/enterprise-admin#update-a-self-hosted-runner-group-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/actions/runner-groups/{runner_group_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EnterpriseAdminUpdateSelfHostedRunnerGroupForEnterpriseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RunnerGroupsEnterprise])
                res.runner_groups_enterprise = out

        return res

    