import requests
from sdk.models import operations
from . import utils

class EcommerceDelivery:
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

    
    def confirm_carbon_offset1(self, request: operations.ConfirmCarbonOffset1Request) -> operations.ConfirmCarbonOffset1Response:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET1_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffset1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment1(self, request: operations.ConfirmPayment1Request) -> operations.ConfirmPayment1Response:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT1_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmPayment"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPayment1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction1(self, request: operations.ConfirmPaymentOfTransaction1Request) -> operations.ConfirmPaymentOfTransaction1Response:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION1_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmTransaction"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransaction1Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting2(self, request: operations.ConfirmsPlanting2Request) -> operations.ConfirmsPlanting2Response:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING2_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery/confirmPlanting"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlanting2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def ecommerce_delivery(self, request: operations.EcommerceDeliveryRequest) -> operations.EcommerceDeliveryResponse:
        r"""ecommerceDelivery
        """
        
        base_url = operations.ECOMMERCE_DELIVERY_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/ecommerceDelivery"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EcommerceDeliveryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    