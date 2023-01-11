import requests
from sdk.models import operations
from . import utils

class AirtravelCoordinates:
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

    
    def airtravel_coordinates(self, request: operations.AirtravelCoordinatesRequest) -> operations.AirtravelCoordinatesResponse:
        r"""airtravelCoordinates
        """
        
        base_url = operations.AIRTRAVEL_COORDINATES_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AirtravelCoordinatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_carbon_offset4(self, request: operations.ConfirmCarbonOffset4Request) -> operations.ConfirmCarbonOffset4Response:
        r"""confirmCarbonOffset
        """
        
        base_url = operations.CONFIRM_CARBON_OFFSET4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmCarbonOffset"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmCarbonOffset4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment4(self, request: operations.ConfirmPayment4Request) -> operations.ConfirmPayment4Response:
        r"""confirmPayment
        """
        
        base_url = operations.CONFIRM_PAYMENT4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmPayment"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPayment4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirm_payment_of_transaction4(self, request: operations.ConfirmPaymentOfTransaction4Request) -> operations.ConfirmPaymentOfTransaction4Response:
        r"""confirmTransaction
        """
        
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmTransaction"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmPaymentOfTransaction4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def confirms_planting4(self, request: operations.ConfirmsPlanting4Request) -> operations.ConfirmsPlanting4Response:
        r"""confirmPlanting
        """
        
        base_url = operations.CONFIRMS_PLANTING4_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = base_url.removesuffix("/") + "/airtravelCoordinates/confirmPlanting"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ConfirmsPlanting4Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    