import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Country:
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

    
    def get_daily_report_all_countries(self, request: operations.GetDailyReportAllCountriesRequest) -> operations.GetDailyReportAllCountriesResponse:
        r"""getDailyReportAllCountries
        Get daily report for all countries. Date is mandatory parametar. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/country/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportAllCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetDailyReportAllCountries200ApplicationJSON]])
                res.get_daily_report_all_countries_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_daily_report_by_country_code(self, request: operations.GetDailyReportByCountryCodeRequest) -> operations.GetDailyReportByCountryCodeResponse:
        r"""getDailyReportByCountryCode
        Get daily report for specific country. Country code and date are mandatory in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/country/code"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportByCountryCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetDailyReportByCountryCode200ApplicationJSON]])
                res.get_daily_report_by_country_code_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_daily_report_by_country_name(self, request: operations.GetDailyReportByCountryNameRequest) -> operations.GetDailyReportByCountryNameResponse:
        r"""getDailyReportByCountryName
        Get daily report for specific country. Country name and date are mandatory in parametars. Date format is by ISO 8601 standard, but you can provide different format with date-format parameter
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/report/country/name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyReportByCountryNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetDailyReportByCountryName200ApplicationJSON]])
                res.get_daily_report_by_country_name_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_all_countries(self, request: operations.GetLatestAllCountriesRequest) -> operations.GetLatestAllCountriesResponse:
        r"""getLatestAllCountries
        Get latest data from all countries.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/country/all"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestAllCountriesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetLatestAllCountries200ApplicationJSON]])
                res.get_latest_all_countries_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_country_data_by_code(self, request: operations.GetLatestCountryDataByCodeRequest) -> operations.GetLatestCountryDataByCodeResponse:
        r"""getLatestCountryDataByCode
        Get latest data for specific country. Country code and format are in parametars. Country code is in ISO 3166-1 standard. It can be 2 chars (Alpha-2) or 3 chars (Alpha-3) type.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/country/code"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestCountryDataByCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetLatestCountryDataByCode200ApplicationJSON]])
                res.get_latest_country_data_by_code_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_latest_country_data_by_name(self, request: operations.GetLatestCountryDataByNameRequest) -> operations.GetLatestCountryDataByNameResponse:
        r"""getLatestCountryDataByName
        Get latest data for specific country. Country name and format are in parametars.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/country"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLatestCountryDataByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[operations.GetLatestCountryDataByName200ApplicationJSON]])
                res.get_latest_country_data_by_name_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    