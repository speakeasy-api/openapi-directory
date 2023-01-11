import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AdReportMetadata:
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

    
    def get_report_metadata(self, request: operations.GetReportMetadataRequest) -> operations.GetReportMetadataResponse:
        r"""This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports. The request for this method does not use a payload or any URI parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ad_report_metadata"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportMetadataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportMetadatas])
                res.report_metadatas = out
        elif r.status_code == 500:
            pass

        return res

    
    def get_report_metadata_for_report_type(self, request: operations.GetReportMetadataForReportTypeRequest) -> operations.GetReportMetadataForReportTypeResponse:
        r"""This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the report_type path parameter to indicate metadata to retrieve. This method does not use a request payload.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ad_report_metadata/{report_type}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetReportMetadataForReportTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReportMetadata])
                res.report_metadata = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    