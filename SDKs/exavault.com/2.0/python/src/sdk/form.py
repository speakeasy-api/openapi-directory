import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Form:
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

    
    def delete_form_message_by_id(self, request: operations.DeleteFormMessageByIDRequest) -> operations.DeleteFormMessageByIDResponse:
        r"""Delete a receive form submission
        Deletes a form submission entry, which represents one time that a visitor filled out the form and uploaded files. This deletes only the record of the submission (the date, the values entered in the form and the names of the files uploaded by the visitor).The share and any associated file resources will not be deleted by this. 
        
        **Notes**:
        
        - Use the [GET /form/entries/{formId}](#operation/getFormMessageById) to list the submissions and obtain the ID of the entry you want to delete
        - You must have the [DeleteFormData permission](/docs/account/04-users/00-introduction#managing-user-roles-and-permissions) in order to use this operation
        - It is not possible to un-delete data that is removed in this way
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/forms/entries/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFormMessageByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def get_form_by_id(self, request: operations.GetFormByIDRequest) -> operations.GetFormByIDResponse:
        r"""Get receive folder form by Id
        Returns the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders). The form details will return all the input fields and their settings. 
        
        Use the `include` parameter (with the value **share**) to also retrieve the details of the associated receive folder. 
        
        **Note**
        
        If you prefer to find a form by its shareHash, you can use the [GET /forms](#operation/getFormByShareHash) endpoint instead. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/forms/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFormByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormResponse])
                res.form_response = out

        return res

    
    def get_form_by_share_hash(self, request: operations.GetFormByShareHashRequest) -> operations.GetFormByShareHashResponse:
        r"""Get receive folder form settings
        Get the information for the [file upload form](/docs/account/05-file-sharing/05-form-builder) assigned to a [receive folder](/docs/account/05-file-sharing/04-receive-folders) by its shareHash. The form details will return all the input field settings and the CSS for the form.
        
        Use the `include` parameter (with the value **share**) to also get the details of the associated receive folder.
        
        **Note**
        
        - If you prefer to find a form by its ID, you can use the [GET /forms/{id}](#operation/getFormById) endpoint instead. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/forms"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFormByShareHashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormResponse])
                res.form_response = out

        return res

    
    def get_form_entries(self, request: operations.GetFormEntriesRequest) -> operations.GetFormEntriesResponse:
        r"""Get form data entries for a receive
        Returns the form data entries for a specific form for a receive. Optional parameters can be included in the call to manage larger data sets.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/forms/entries/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFormEntriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormEntryResponse])
                res.form_entry_response = out

        return res

    
    def update_form_by_id(self, request: operations.UpdateFormByIDRequest) -> operations.UpdateFormByIDResponse:
        r"""Updates a form with given parameters
        Add, update, or delete a form's parameters. This will alter how your users/customers will see and interact with the form when sending you files. 
        
        **Notes**
        
        *This call will **replace** your current form in its entirety.* If you want to keep any existing elements unchanged, be sure to submit the call with an element's current settings to preserve them.                          
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/forms/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFormByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormResponse])
                res.form_response = out

        return res

    