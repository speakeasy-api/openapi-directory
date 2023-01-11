import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Totals:
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

    
    def get_daily_report_totals(self, request: operations.GetDailyReportTotalsRequest) -> operations.GetDailyReportTotalsResponse:
        r"""getDailyReportTotals
        Get daily report data for whole world.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/totals"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetDailyReportTotals200ApplicationJSON]])
                res.get_daily_report_totals_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_totals(self, request: operations.GetLatestTotalsRequest) -> operations.GetLatestTotalsResponse:
        r"""getLatestTotals
        Get latest data for whole world.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/totals"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestTotalsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetLatestTotals200ApplicationJSON]])
                res.get_latest_totals_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    