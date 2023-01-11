import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class EmailLists:
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

    
    def add_email_list(self, request: operations.AddEmailListRequest) -> operations.AddEmailListResponse:
        r"""Create new email list
        Create a new email list. Among other things, email lists can be used to send files or share folders with a group of email addresses at once.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/email-lists"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddEmailListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmailListResponse])
                res.email_list_response = out

        return res

    
    def delete_email_list_by_id(self, request: operations.DeleteEmailListByIDRequest) -> operations.DeleteEmailListByIDResponse:
        r"""Delete an email group with given id
        Permanently delete an email group. This action is not reversible. We recommend making a user confirm this action before sending the API call. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/email-lists/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteEmailListByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def get_email_list_by_id(self, request: operations.GetEmailListByIDRequest) -> operations.GetEmailListByIDResponse:
        r"""Get individual email group
        Retrieve all the details of a specific email list including it's name, when it was created and all the email addresses that belong to the group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/email-lists/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmailListByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmailListResponse])
                res.email_list_response = out

        return res

    
    def get_email_lists(self, request: operations.GetEmailListsRequest) -> operations.GetEmailListsResponse:
        r"""Get all email groups
        List all email groups for authenticated user
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/email-lists"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEmailListsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmailListCollectionResponse])
                res.email_list_collection_response = out

        return res

    
    def update_email_list_by_id(self, request: operations.UpdateEmailListByIDRequest) -> operations.UpdateEmailListByIDResponse:
        r"""Update an email group
        Add or remove emails from an email list that can be used to send and share files with groups. 
        
        **Notes**
        
        *This call will **replace** your current email list in its entirety.* If you want to keep any existing emails on the list, be sure to submit the call with any current emails you want to keep on the list.  
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/email-lists/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateEmailListByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmailListResponse])
                res.email_list_response = out

        return res

    