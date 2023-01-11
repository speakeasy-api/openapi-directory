import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PromotionSummaryReport:
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

    
    def get_promotion_summary_report(self, request: operations.GetPromotionSummaryReportRequest) -> operations.GetPromotionSummaryReportResponse:
        r"""This method generates a report that summarizes the seller's promotions for the specified eBay marketplace. The report returns information on RUNNING, PAUSED, and ENDED promotions (deleted reports are not returned) and summarizes the seller's campaign performance for all promotions on a given site. For information about summary reports, see Reading the item promotion Summary report.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/promotion_summary_report"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPromotionSummaryReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SummaryReportResponse])
                res.summary_report_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    