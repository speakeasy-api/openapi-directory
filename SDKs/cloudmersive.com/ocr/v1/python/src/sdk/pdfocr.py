import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PdfOcr:
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

    
    def pdf_ocr_pdf_to_lines_with_location(self, request: operations.PdfOcrPdfToLinesWithLocationRequest) -> operations.PdfOcrPdfToLinesWithLocationResponse:
        r"""Convert a PDF into text lines with location
        Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/pdf/to/lines-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PdfOcrPdfToLinesWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToLinesWithLocationResult])
                res.pdf_to_lines_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToLinesWithLocationResult])
                res.pdf_to_lines_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pdf_ocr_pdf_to_words_with_location(self, request: operations.PdfOcrPdfToWordsWithLocationRequest) -> operations.PdfOcrPdfToWordsWithLocationResponse:
        r"""Convert a PDF into words with location
        Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/pdf/to/words-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PdfOcrPdfToWordsWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToWordsWithLocationResult])
                res.pdf_to_words_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToWordsWithLocationResult])
                res.pdf_to_words_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pdf_ocr_post(self, request: operations.PdfOcrPostRequest) -> operations.PdfOcrPostResponse:
        r"""Converts an uploaded PDF file into text via Optical Character Recognition.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/pdf/toText"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PdfOcrPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToTextResponse])
                res.pdf_to_text_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToTextResponse])
                res.pdf_to_text_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    