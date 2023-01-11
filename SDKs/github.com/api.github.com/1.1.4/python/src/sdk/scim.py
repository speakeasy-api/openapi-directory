import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Scim:
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

    
    def scim_delete_user_from_org(self, request: operations.ScimDeleteUserFromOrgRequest) -> operations.ScimDeleteUserFromOrgResponse:
        r"""Delete a SCIM user from an organization
        https://docs.github.com/rest/reference/scim/#delete-a-scim-user-from-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/organizations/{org}/Users/{scim_user_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScimDeleteUserFromOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out

        return res

    
    def scim_get_provisioning_information_for_user(self, request: operations.ScimGetProvisioningInformationForUserRequest) -> operations.ScimGetProvisioningInformationForUserResponse:
        r"""Get SCIM provisioning information for a user
        https://docs.github.com/rest/reference/scim/#get-scim-provisioning-information-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/organizations/{org}/Users/{scim_user_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ScimGetProvisioningInformationForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimUser])
                res.scim_user = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out

        return res

    
    def scim_list_provisioned_identities(self, request: operations.ScimListProvisionedIdentitiesRequest) -> operations.ScimListProvisionedIdentitiesResponse:
        r"""List SCIM provisioned identities
        Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.
        
        When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
          - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.
          - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
          - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
        
        The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
        
        1. The user is granted access by the IdP and is not a member of the GitHub organization.
        
        1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
        
        1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
           - If the user signs in, their GitHub account is linked to this entry.
           - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity `null` entry remains in place.
        https://docs.github.com/rest/reference/scim/#list-scim-provisioned-identities - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/organizations/{org}/Users", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ScimListProvisionedIdentitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimUserList])
                res.scim_user_list = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out

        return res

    
    def scim_provision_and_invite_user(self, request: operations.ScimProvisionAndInviteUserRequest) -> operations.ScimProvisionAndInviteUserResponse:
        r"""Provision and invite a SCIM user
        Provision organization membership for a user, and send an activation email to the email address.
        https://docs.github.com/rest/reference/scim/#provision-and-invite-a-scim-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/organizations/{org}/Users", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ScimProvisionAndInviteUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimUser])
                res.scim_user = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 409:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out

        return res

    
    def scim_set_information_for_provisioned_user(self, request: operations.ScimSetInformationForProvisionedUserRequest) -> operations.ScimSetInformationForProvisionedUserResponse:
        r"""Update a provisioned organization membership
        Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user) endpoint instead.
        
        You must at least provide the required values for the user: `userName`, `name`, and `emails`.
        
        **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
        https://docs.github.com/rest/reference/scim/#set-scim-information-for-a-provisioned-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/organizations/{org}/Users/{scim_user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ScimSetInformationForProvisionedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimUser])
                res.scim_user = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out

        return res

    
    def scim_update_attribute_for_user(self, request: operations.ScimUpdateAttributeForUserRequest) -> operations.ScimUpdateAttributeForUserResponse:
        r"""Update an attribute for a SCIM user
        Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
        
        **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `\"path\": \"emails[type eq \\"work\\"]\"` will not work.
        
        **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.
        
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
        https://docs.github.com/rest/reference/scim/#update-an-attribute-for-a-scim-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/scim/v2/organizations/{org}/Users/{scim_user_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ScimUpdateAttributeForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimUser])
                res.scim_user = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
            if utils.match_content_type(content_type, "application/scim+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScimError])
                res.scim_error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    