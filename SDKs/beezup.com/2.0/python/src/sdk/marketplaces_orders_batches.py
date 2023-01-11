import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MarketplacesOrdersBatches:
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

    
    def change_order_list(self, request: operations.ChangeOrderListRequest) -> operations.ChangeOrderListResponse:
        r"""[DEPRECATED] Send a batch of operations to change your marketplace Order information: accept, ship, etc.  (max 100 items per call)
        The purpose of this operation is to reduce the amount of request to the API. 
        Max 100 items per call.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/user/marketplaces/orders/batches/changeOrders/{changeOrderType}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChangeOrderListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchOrderOperationResponse])
                res.batch_order_operation_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def clear_merchant_order_info_list(self, request: operations.ClearMerchantOrderInfoListRequest) -> operations.ClearMerchantOrderInfoListResponse:
        r"""[DEPRECATED] Send a batch of operations to clear an Order's merchant information (max 100 items per call)
        The purpose of this operation is to reduce the amount of request to the API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/marketplaces/orders/batches/clearMerchantOrderInfos"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ClearMerchantOrderInfoListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchOrderOperationResponse])
                res.batch_order_operation_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def set_merchant_order_info_list(self, request: operations.SetMerchantOrderInfoListRequest) -> operations.SetMerchantOrderInfoListResponse:
        r"""[DEPRECATED] Send a batch of operations to set an Order's merchant information  (max 100 items per call)
        The purpose of this operation is to reduce the amount of request to the API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/marketplaces/orders/batches/setMerchantOrderInfos"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SetMerchantOrderInfoListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchOrderOperationResponse])
                res.batch_order_operation_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    