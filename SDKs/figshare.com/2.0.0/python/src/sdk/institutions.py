import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Institutions:
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

    
    def account_institution_curation(self, request: operations.AccountInstitutionCurationRequest) -> operations.AccountInstitutionCurationResponse:
        r"""Institution Curation Review
        Retrieve a certain curation review by its ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/review/{curation_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountInstitutionCurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurationDetail])
                res.curation_detail = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_institution_curation_comments(self, request: operations.AccountInstitutionCurationCommentsRequest) -> operations.AccountInstitutionCurationCommentsResponse:
        r"""Institution Curation Review Comments
        Retrieve a certain curation review's comments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/review/{curation_id}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountInstitutionCurationCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CurationComment])
                res.curation_comment = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_institution_curations(self, request: operations.AccountInstitutionCurationsRequest) -> operations.AccountInstitutionCurationsResponse:
        r"""Institution Curation Reviews
        Retrieve a list of curation reviews for this institution
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/reviews"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountInstitutionCurationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Curation])
                res.curation = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def institution_articles(self, request: operations.InstitutionArticlesRequest) -> operations.InstitutionArticlesResponse:
        r"""Public Licenses
        Returns a list of articles belonging to the institution
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/institutions/{institution_string_id}/articles/filter-by", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 500:
            pass

        return res

    
    def institution_hrfeed_upload(self, request: operations.InstitutionHrfeedUploadRequest) -> operations.InstitutionHrfeedUploadResponse:
        r"""Private Institution HRfeed Upload
        More info in the <a href=\"#hr_feed\">HR Feed section</a>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/institution/hrfeed/upload"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InstitutionHrfeedUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseMessage])
                res.response_message = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def post_account_institution_review_curation_id_comments(self, request: operations.PostAccountInstitutionReviewCurationIDCommentsRequest) -> operations.PostAccountInstitutionReviewCurationIDCommentsResponse:
        r"""POST Institution Curation Review Comment
        Add a new comment to the review.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/review/{curation_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountInstitutionReviewCurationIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_account_institution_user(self, request: operations.PrivateAccountInstitutionUserRequest) -> operations.PrivateAccountInstitutionUserResponse:
        r"""Private Account Institution User
        Retrieve institution user information using the account_id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/users/{account_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateAccountInstitutionUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.User])
                res.user = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_categories_list(self, request: operations.PrivateCategoriesListRequest) -> operations.PrivateCategoriesListResponse:
        r"""Private Account Categories
        List institution categories (including parent Categories)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/categories"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateCategoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Category]])
                res.categories = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_group_embargo_options_details(self, request: operations.PrivateGroupEmbargoOptionsDetailsRequest) -> operations.PrivateGroupEmbargoOptionsDetailsResponse:
        r"""Private Account Institution Group Embargo Options
        Account institution group embargo options details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/groups/{group_id}/embargo_options", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateGroupEmbargoOptionsDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.GroupEmbargoOptions]])
                res.group_embargo_options = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_account_group_role_delete(self, request: operations.PrivateInstitutionAccountGroupRoleDeleteRequest) -> operations.PrivateInstitutionAccountGroupRoleDeleteResponse:
        r"""Delete Institution Account Group Role
        Delete Institution Account Group Role
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/roles/{account_id}/{group_id}/{role_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountGroupRoleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_account_group_roles(self, request: operations.PrivateInstitutionAccountGroupRolesRequest) -> operations.PrivateInstitutionAccountGroupRolesResponse:
        r"""List Institution Account Group Roles
        List Institution Account Group Roles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/roles/{account_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountGroupRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.account_group_roles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_account_group_roles_create(self, request: operations.PrivateInstitutionAccountGroupRolesCreateRequest) -> operations.PrivateInstitutionAccountGroupRolesCreateResponse:
        r"""Add Institution Account Group Roles
        Add Institution Account Group Roles
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/roles/{account_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountGroupRolesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_accounts_create(self, request: operations.PrivateInstitutionAccountsCreateRequest) -> operations.PrivateInstitutionAccountsCreateResponse:
        r"""Create new Institution Account
        Create a new Account by sending account information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/accounts"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_accounts_list(self, request: operations.PrivateInstitutionAccountsListRequest) -> operations.PrivateInstitutionAccountsListResponse:
        r"""Private Account Institution Accounts
        Returns the accounts for which the account has administrative privileges (assigned and inherited).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ShortAccount]])
                res.short_accounts = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_accounts_search(self, request: operations.PrivateInstitutionAccountsSearchRequest) -> operations.PrivateInstitutionAccountsSearchResponse:
        r"""Private Account Institution Accounts Search
        Returns the accounts for which the account has administrative privileges (assigned and inherited).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/accounts/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ShortAccount]])
                res.short_accounts = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_accounts_update(self, request: operations.PrivateInstitutionAccountsUpdateRequest) -> operations.PrivateInstitutionAccountsUpdateResponse:
        r"""Update Institution Account
        Update Institution Account
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/institution/accounts/{account_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionAccountsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_articles(self, request: operations.PrivateInstitutionArticlesRequest) -> operations.PrivateInstitutionArticlesResponse:
        r"""Private Institution Articles
        Get Articles from own institution. User must be administrator of the institution
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/articles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_details(self, request: operations.PrivateInstitutionDetailsRequest) -> operations.PrivateInstitutionDetailsResponse:
        r"""Private Account Institutions
        Account institution details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Institution])
                res.institution = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_embargo_options_details(self, request: operations.PrivateInstitutionEmbargoOptionsDetailsRequest) -> operations.PrivateInstitutionEmbargoOptionsDetailsResponse:
        r"""Private Account Institution embargo options
        Account institution embargo options details
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/embargo_options"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionEmbargoOptionsDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.GroupEmbargoOptions]])
                res.group_embargo_options = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_groups_list(self, request: operations.PrivateInstitutionGroupsListRequest) -> operations.PrivateInstitutionGroupsListResponse:
        r"""Private Account Institution Groups
        Returns the groups for which the account has administrative privileges (assigned and inherited).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/groups"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Group]])
                res.groups = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_institution_roles_list(self, request: operations.PrivateInstitutionRolesListRequest) -> operations.PrivateInstitutionRolesListResponse:
        r"""Private Account Institution Roles
        Returns the roles available for groups and the institution group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/institution/roles"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateInstitutionRolesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Role]])
                res.roles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    