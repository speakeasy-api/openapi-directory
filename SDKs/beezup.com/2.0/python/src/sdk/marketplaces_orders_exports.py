import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MarketplacesOrdersExports:
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

    
    def export_orders(self, request: operations.ExportOrdersRequest) -> operations.ExportOrdersResponse:
        r"""Request a new Order report exportation to be generated
        A new file will be generated containing a summary of all the Orders matching the requested filter settings.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/marketplaces/orders/exportations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    
    def get_order_exportations(self, request: operations.GetOrderExportationsRequest) -> operations.GetOrderExportationsResponse:
        r"""Get a paginated list of Order report exportations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/user/marketplaces/orders/exportations"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrderExportationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OrderExportations])
                res.order_exportations = out
        elif r.status_code == 304:
            res.headers = r.headers
            
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BeezUpCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    