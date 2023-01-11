import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Organization:
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

    
    def count_orga_users(self, request: operations.CountOrgaUsersRequest) -> operations.CountOrgaUsersResponse:
        r"""Count the organization users using the provided filters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/users/count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CountOrgaUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[int])
                res.count_orga_users_200_application_json_integer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_lti_credentials(self, request: operations.CreateLtiCredentialsRequest) -> operations.CreateLtiCredentialsResponse:
        r"""Create a new couple of LTI 1.x credentials
        Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/lti/credentials"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateLtiCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LtiCredentials])
                res.lti_credentials = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_organization_invitation(self, request: operations.CreateOrganizationInvitationRequest) -> operations.CreateOrganizationInvitationResponse:
        r"""Create a new invitation to join the organization
        This method creates and sends invitation for teachers and admins.
        
        Invitations can only be used by new Flat users or users who are not part of the organization yet.
        
        If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/invitations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrganizationInvitation])
                res.organization_invitation = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def create_organization_user(self, request: operations.CreateOrganizationUserRequest) -> operations.CreateOrganizationUserResponse:
        r"""Create a new user account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/users"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateOrganizationUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDetailsAdmin])
                res.user_details_admin = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_lti_credentials(self, request: operations.ListLtiCredentialsRequest) -> operations.ListLtiCredentialsResponse:
        r"""List LTI 1.x credentials
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/lti/credentials"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListLtiCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.LtiCredentials]])
                res.lti_credentials = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_organization_invitations(self, request: operations.ListOrganizationInvitationsRequest) -> operations.ListOrganizationInvitationsResponse:
        r"""List the organization invitations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/invitations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOrganizationInvitationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.OrganizationInvitation]])
                res.organization_invitations = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def list_organization_users(self, request: operations.ListOrganizationUsersRequest) -> operations.ListOrganizationUsersResponse:
        r"""List the organization users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/organizations/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListOrganizationUsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.UserDetailsAdmin]])
                res.user_details_admins = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def remove_organization_invitation(self, request: operations.RemoveOrganizationInvitationRequest) -> operations.RemoveOrganizationInvitationResponse:
        r"""Remove an organization invitation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/invitations/{invitation}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveOrganizationInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def remove_organization_user(self, request: operations.RemoveOrganizationUserRequest) -> operations.RemoveOrganizationUserResponse:
        r"""Remove an account from Flat
        This operation removes an account from Flat and its data, including:
        * The music scores created by this user (documents, history, comments, collaboration information)
        * Education related data (assignments and classroom information)
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/users/{user}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveOrganizationUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def revoke_lti_credentials(self, request: operations.RevokeLtiCredentialsRequest) -> operations.RevokeLtiCredentialsResponse:
        r"""Revoke LTI 1.x credentials
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/lti/credentials/{credentials}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RevokeLtiCredentialsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    
    def update_organization_user(self, request: operations.UpdateOrganizationUserRequest) -> operations.UpdateOrganizationUserResponse:
        r"""Update account information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/organizations/users/{user}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateOrganizationUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDetailsAdmin])
                res.user_details_admin = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FlatErrorResponse])
                res.flat_error_response = out

        return res

    