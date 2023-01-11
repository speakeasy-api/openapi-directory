import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ApIs:
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

    
    def importer_exporter_code_verification_api(self, request: operations.ImporterExporterCodeVerificationAPIRequest) -> operations.ImporterExporterCodeVerificationAPIResponse:
        r"""Importer-Exporter Code (IEC) Verification API.
        Description of Importer-Exporter Code (IEC) Verification API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/iec/{iec}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImporterExporterCodeVerificationAPIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI200ApplicationJSON])
                res.importer_exporter_code_verification_api_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI400ApplicationJSON])
                res.importer_exporter_code_verification_api_400_application_json_object = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI401ApplicationJSON])
                res.importer_exporter_code_verification_api_401_application_json_object = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI404ApplicationJSON])
                res.importer_exporter_code_verification_api_404_application_json_object = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI500ApplicationJSON])
                res.importer_exporter_code_verification_api_500_application_json_object = out
        elif r.status_code == 502:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI502ApplicationJSON])
                res.importer_exporter_code_verification_api_502_application_json_object = out
        elif r.status_code == 503:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI503ApplicationJSON])
                res.importer_exporter_code_verification_api_503_application_json_object = out
        elif r.status_code == 504:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImporterExporterCodeVerificationAPI504ApplicationJSON])
                res.importer_exporter_code_verification_api_504_application_json_object = out

        return res

    