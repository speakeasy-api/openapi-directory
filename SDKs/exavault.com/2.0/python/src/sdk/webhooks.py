import requests
from typing import Optional
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

    
    def add_webhook(self, request: operations.AddWebhookRequest) -> operations.AddWebhookResponse:
        r"""Add A New Webhook
        Create a new Webhook on your account. Creating a Webhook will require an endpoint URL, a path, what events should trigger a webhook, and what request version to use. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookResponse])
                res.webhook_response = out

        return res

    
    def delete_webhook(self, request: operations.DeleteWebhookRequest) -> operations.DeleteWebhookResponse:
        r"""Delete a webhook
        Deleted the specified webhook. This will not affect logs or any resources the webhook is connected to. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def get_webhook_by_id(self, request: operations.GetWebhookByIDRequest) -> operations.GetWebhookByIDResponse:
        r"""Get info for a webhook
        Returns the metadata for a specific webhook. Webhook IDs can be retrieve from GET /webhooks
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWebhookByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookResponse])
                res.webhook_response = out

        return res

    
    def get_wehooks_list(self, request: operations.GetWehooksListRequest) -> operations.GetWehooksListResponse:
        r"""Get Webhooks List
        Returns a list of Webhooks. By default, this will return metadata on all Webhooks within the account. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/webhooks"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWehooksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookCollectionResponse])
                res.webhook_collection_response = out

        return res

    
    def regenerate_webhook_token(self, request: operations.RegenerateWebhookTokenRequest) -> operations.RegenerateWebhookTokenResponse:
        r"""Regenerate security token
        This endpoint will allow you to regenerate the security token for a webhook if you believe it’s been compromised in any way. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/regenerate-token/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RegenerateWebhookTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookResponse])
                res.webhook_response = out

        return res

    
    def resend_webhook_activity_entry(self, request: operations.ResendWebhookActivityEntryRequest) -> operations.ResendWebhookActivityEntryResponse:
        r"""Resend a webhook message
        This endpoint will allow you to resend a webhook that was previously sent. Resent webhooks will send exactly the same as the original webhook with the exception of the “sent” timestamp. Activity IDs can be retrieve from the webhook logs in your account or via GET /activity/webhooks
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/resend/{activityId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ResendWebhookActivityEntryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def update_webhook(self, request: operations.UpdateWebhookRequest) -> operations.UpdateWebhookResponse:
        r"""Update a webhook
        Update the specified webhook. Updated webhooks will take effect immediately and could impact active workflows. Please be certain the webhook is not currently in use prior to updating. 
        
        You only need to send the portions of the webhook configuration you wish to change, rather than the entire webhook object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webhooks/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWebhookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebhookResponse])
                res.webhook_response = out

        return res

    