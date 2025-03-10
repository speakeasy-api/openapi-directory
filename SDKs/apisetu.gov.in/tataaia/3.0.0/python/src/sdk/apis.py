"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class APIs:
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def licer(self, request: operations.LicerRequestBody, security: operations.LicerSecurity) -> operations.LicerResponse:
        r"""Insurance Policy - Life
        API to verify Insurance Policy - Life.
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/licer/certificate'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.LicerResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            pass
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer400ApplicationJSON])
                res.licer_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer401ApplicationJSON])
                res.licer_401_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer404ApplicationJSON])
                res.licer_404_application_json_object = out
        elif http_res.status_code == 500:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer500ApplicationJSON])
                res.licer_500_application_json_object = out
        elif http_res.status_code == 502:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer502ApplicationJSON])
                res.licer_502_application_json_object = out
        elif http_res.status_code == 503:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer503ApplicationJSON])
                res.licer_503_application_json_object = out
        elif http_res.status_code == 504:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Licer504ApplicationJSON])
                res.licer_504_application_json_object = out

        return res

    def prcpt(self, request: operations.PrcptRequestBody, security: operations.PrcptSecurity) -> operations.PrcptResponse:
        r"""Premium Receipt
        API to verify Premium Receipt.
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/prcpt/certificate'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PrcptResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            pass
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt400ApplicationJSON])
                res.prcpt_400_application_json_object = out
        elif http_res.status_code == 401:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt401ApplicationJSON])
                res.prcpt_401_application_json_object = out
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt404ApplicationJSON])
                res.prcpt_404_application_json_object = out
        elif http_res.status_code == 500:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt500ApplicationJSON])
                res.prcpt_500_application_json_object = out
        elif http_res.status_code == 502:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt502ApplicationJSON])
                res.prcpt_502_application_json_object = out
        elif http_res.status_code == 503:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt503ApplicationJSON])
                res.prcpt_503_application_json_object = out
        elif http_res.status_code == 504:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[operations.Prcpt504ApplicationJSON])
                res.prcpt_504_application_json_object = out

        return res

    