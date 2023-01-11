import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DirectDebits:
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

    
    def activate_mandate(self, request: operations.ActivateMandateRequest) -> operations.ActivateMandateResponse:
        r"""Activate a direct debit mandate
        This endpoint can only be used to activate a direct debit mandate when it is in the status REJECT_REQUESTED (even if the account has direct debits disabled). This action will also enable the account for direct debits if it was previously set to be disabled.
        The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_ACTIVATE
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}/activate", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ActivateMandateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def cancel_mandate_by_uuid(self, request: operations.CancelMandateByUUIDRequest) -> operations.CancelMandateByUUIDResponse:
        r"""Cancel a direct debit mandate
        This endpoint allows you to cancel a direct debit mandate.
        The permision needed to access this endpoint is PERM_BUSINESS_POST_MANDATE_CANCEL
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}/cancel", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelMandateByUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_direct_debit_by_uuid(self, request: operations.GetDirectDebitByUUIDRequest) -> operations.GetDirectDebitByUUIDResponse:
        r"""Get the deails of a direct debit
        Retrieve all details of a single direct debit collection/payment, whether successful or not.
        The permision needed to access this endpoint is **PERM_BUSINESS_GET_DIRECT_DEBIT**
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directdebits/{directDebitUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectDebitByUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems])
                res.onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items = out

        return res

    
    def get_direct_debit_mandates(self) -> operations.GetDirectDebitMandatesResponse:
        r"""List all direct debit mandates
        The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATES
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mandates"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectDebitMandatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDirectDebitMandatesMandates])
                res.mandates = out

        return res

    
    def get_direct_debits_for_mandate_uuid(self, request: operations.GetDirectDebitsForMandateUUIDRequest) -> operations.GetDirectDebitsForMandateUUIDResponse:
        r"""Get all DD payments associated with a direct debit mandate
        Retrieve all direct debit payments associated with a direct debit mandate.
        The permision needed to access this endpoint is PERM_BUSINESS_GET_DIRECT_DEBITS
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/directdebits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDirectDebitsForMandateUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetDirectDebitsForMandateUUIDDirectDebits])
                res.direct_debits = out

        return res

    
    def get_mandate(self, request: operations.GetMandateRequest) -> operations.GetMandateResponse:
        r"""Get direct debit mandate details
        Retrieve all details for a direct debit mandate.
        The permision needed to access this endpoint is PERM_BUSINESS_GET_MANDATE
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMandateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnemandatesGetResponses200ContentApplication1jsonSchemaPropertiesMandatesItems])
                res.onemandates_get_responses_200_content_application_1json_schema_properties_mandates_items = out

        return res

    
    def reject_direct_debit(self, request: operations.RejectDirectDebitRequest) -> operations.RejectDirectDebitResponse:
        r"""Reject a direct debit payment
        This endpoint allows you to reject a direct debit payment where the status is still set to RECEIVED.
        Permission name PERM_BUSINESS_POST_DIRECT_DEBIT_REJECT
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/directdebits/{directDebitUuid}/reject", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RejectDirectDebitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def update_mandate_alias(self, request: operations.UpdateMandateAliasRequest) -> operations.UpdateMandateAliasResponse:
        r"""Update a direct debit mandate alias
        Update Direct Debit Mandate Alias
        The permision needed to access this endpoint is PERM_BUSINESS_PUT_MANDATE
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/mandates/{mandateUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateMandateAliasResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    