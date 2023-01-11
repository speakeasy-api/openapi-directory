import requests
from typing import Optional
from sdk.models import operations
from . import utils

class OpenBanking:
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

    
    def get_list_of_aspsps(self, request: operations.GetListOfAspspsRequest) -> operations.GetListOfAspspsResponse:
        r"""Get list of ASPSPs / Banks
        Returns all ASPSPs (Account Servicing Payment Service Provider) / banks. The list can be filtered by currency. You will need to enable the `PERM_BUSINESS_GET_ASPSPS` permission to use this endpoint.
        ***This endpoint is only required if you intend to host the “Select ASPSP / bank” page yourself.***
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/aspsps"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOfAspspsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetListOfAspspsAspsps])
                res.aspsps = out

        return res

    
    def get_payment_details(self, request: operations.GetPaymentDetailsRequest) -> operations.GetPaymentDetailsResponse:
        r"""Get Payment Details
        Returns the details of a specific payment.
        
        As the customer goes through the process of making the payment the status of the payment will change.
        
        * `AWAITING_AUTHORISATION` -This is the initial status of all your payments.
        * `AUTHORISED` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank.
        * `AWAITING_MULTI_AUTHORISATION` - Some business accounts such as charities require dual authorisation.
        * `NOT_AUTHORISED` - Either your customer clicked on cancel or the payment was rejected by their ASPSP / bank.
        * `PENDING` - This is the status that your payment is set to after the customer has authorised the payment with their ASPSP / bank but the bank may want to carry out another check before funding the transaction.
        * `PAID` - Funds were received into your fire.com GBP or EUR account from your customer’s ASPSP / bank.
        
        
        You will need to enable the `PERM_BUSINESS_GET_PAYMENT` permission to use this endpoint.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/payments/{paymentUuid}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetPaymentDetailsPaymentRequest])
                res.payment_request = out

        return res

    
    def new_payment_request(self, request: operations.NewPaymentRequestRequest) -> operations.NewPaymentRequestResponse:
        r"""Create a Fire Open Payment request
        Creates a new Fire Open Payment Payment request. A code is returned that can be shared to your customers as a URL by any channel you wish.
        You will need to enable the `PERM_BUSINESS_POST_PAYMENT_REQUEST` permission to use this endpoint.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/paymentrequests"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NewPaymentRequestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.NewPaymentRequestNewPaymentRequestResponse])
                res.new_payment_request_response = out

        return res

    