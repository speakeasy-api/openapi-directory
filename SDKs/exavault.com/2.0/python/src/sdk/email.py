import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Email:
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

    
    def send_referral_email(self, request: operations.SendReferralEmailRequest) -> operations.SendReferralEmailResponse:
        r"""Send referral email to a given address
        Invite a friend to sign up for a free trial of ExaVault. Send a [referral](/lp/referafriend/) email to an email address. If the recipient signs up for ExaVault, we'll apply a credit to your account for the referral. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/email/referral"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendReferralEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    
    def send_welcome_email(self, request: operations.SendWelcomeEmailRequest) -> operations.SendWelcomeEmailResponse:
        r"""Resend welcome email to specific user
        Send a welcome email to a user. The contents of the welcome email can be set by [PATCH /accounts](#operation/updateAccount).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/email/welcome/{username}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendWelcomeEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmptyResponse])
                res.empty_response = out

        return res

    