"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class TransferInstruments:
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
        
    def delete_transfer_instruments_id(self, request: operations.DeleteTransferInstrumentsIDRequest, security: operations.DeleteTransferInstrumentsIDSecurity) -> operations.DeleteTransferInstrumentsIDResponse:
        r"""Delete a transfer instrument
        Deletes a transfer instrument.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.DeleteTransferInstrumentsIDRequest, base_url, '/transferInstruments/{id}', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('DELETE', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.DeleteTransferInstrumentsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 204:
            pass
        elif http_res.status_code in [400, 401, 403, 422, 500]:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ServiceError])
                res.service_error = out

        return res

    def get_transfer_instruments_id(self, request: operations.GetTransferInstrumentsIDRequest, security: operations.GetTransferInstrumentsIDSecurity) -> operations.GetTransferInstrumentsIDResponse:
        r"""Get a transfer instrument
        Returns the details of a transfer instrument.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GetTransferInstrumentsIDRequest, base_url, '/transferInstruments/{id}', request)
        
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetTransferInstrumentsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.TransferInstrument])
                res.transfer_instrument = out
        elif http_res.status_code in [400, 401, 403, 422, 500]:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ServiceError])
                res.service_error = out

        return res

    def patch_transfer_instruments_id(self, request: operations.PatchTransferInstrumentsIDRequest, security: operations.PatchTransferInstrumentsIDSecurity) -> operations.PatchTransferInstrumentsIDResponse:
        r"""Update a transfer instrument
        Updates a transfer instrument.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.PatchTransferInstrumentsIDRequest, base_url, '/transferInstruments/{id}', request)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "transfer_instrument_info", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('PATCH', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PatchTransferInstrumentsIDResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.TransferInstrument])
                res.transfer_instrument = out
        elif http_res.status_code in [400, 401, 403, 422, 500]:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ServiceError])
                res.service_error = out

        return res

    def post_transfer_instruments(self, request: shared.TransferInstrumentInfo, security: operations.PostTransferInstrumentsSecurity) -> operations.PostTransferInstrumentsResponse:
        r"""Create a transfer instrument
        Creates a transfer instrument. 
        
        A transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.
        
        When the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).
        """
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/transferInstruments'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'json')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = utils.configure_security_client(self._client, security)
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.PostTransferInstrumentsResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.TransferInstrument])
                res.transfer_instrument = out
        elif http_res.status_code in [400, 401, 403, 422, 500]:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ServiceError])
                res.service_error = out

        return res

    