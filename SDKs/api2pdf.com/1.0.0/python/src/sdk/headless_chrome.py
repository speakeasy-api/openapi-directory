import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class HeadlessChrome:
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

    
    def chrome_from_html_post(self, request: operations.ChromeFromHTMLPostRequest) -> operations.ChromeFromHTMLPostResponse:
        r"""Convert raw HTML to PDF
        Convert HTML to a PDF using Headless Chrome on AWS Lambda.
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chrome/html"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromeFromHTMLPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def chrome_from_url_get(self, request: operations.ChromeFromURLGetRequest) -> operations.ChromeFromURLGetResponse:
        r"""Convert URL to PDF
        Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda. This GET request is for convenience and does not support advanced options. Use the POST request for more flexibility.
        ### Authorize via Query String Parameter
        **apikey=YOUR-API-KEY**
        ### Example
        ``` https://v2018.api2pdf.com/chrome/url?url={UrlToConvert}&apikey={YourApiKey} ``` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chrome/url"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromeFromURLGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
            if utils.match_content_type(content_type, "application/pdf"):
                res.chrome_from_url_get_200_application_pdf_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    
    def chrome_from_url_post(self, request: operations.ChromeFromURLPostRequest) -> operations.ChromeFromURLPostResponse:
        r"""Convert URL to PDF
        Convert a URL or Web Page to PDF using Headless Chrome on AWS Lambda..
        ### Authorize via Header of Request
        **Authorization: YOUR-API-KEY**
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/chrome/url"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromeFromURLPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseSuccess])
                res.api_response_success = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponseFailure])
                res.api_response_failure = out

        return res

    