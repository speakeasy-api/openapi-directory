import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Preprocessing:
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

    
    def preprocessing_binarize(self, request: operations.PreprocessingBinarizeRequest) -> operations.PreprocessingBinarizeResponse:
        r"""Convert an image of text into a binarized (light and dark) view
        Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/binarize"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingBinarizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_binarize_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_binarize_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_binarize_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_binarize_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_binarize_advanced(self, request: operations.PreprocessingBinarizeAdvancedRequest) -> operations.PreprocessingBinarizeAdvancedResponse:
        r"""Convert an image of text into a binary (light and dark) view with ML
        Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/binarize/advanced"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingBinarizeAdvancedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_binarize_advanced_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_binarize_advanced_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_binarize_advanced_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_binarize_advanced_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_get_page_angle(self, request: operations.PreprocessingGetPageAngleRequest) -> operations.PreprocessingGetPageAngleResponse:
        r"""Get the angle of the page / document / receipt
        Analyzes a photo or image of a document and identifies the rotation angle of the page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/get-page-angle"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingGetPageAngleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPageAngleResult])
                res.get_page_angle_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPageAngleResult])
                res.get_page_angle_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def preprocessing_unrotate(self, request: operations.PreprocessingUnrotateRequest) -> operations.PreprocessingUnrotateResponse:
        r"""Detect and unrotate a document image
        Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/unrotate"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingUnrotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_unrotate_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_unrotate_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_unrotate_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_unrotate_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_unrotate_advanced(self, request: operations.PreprocessingUnrotateAdvancedRequest) -> operations.PreprocessingUnrotateAdvancedResponse:
        r"""Detect and unrotate a document image (advanced)
        Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/unrotate/advanced"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingUnrotateAdvancedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_unrotate_advanced_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_unrotate_advanced_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_unrotate_advanced_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_unrotate_advanced_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_unskew(self, request: operations.PreprocessingUnskewRequest) -> operations.PreprocessingUnskewResponse:
        r"""Detect and unskew a photo of a document
        Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/unskew"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingUnskewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_unskew_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_unskew_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_unskew_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_unskew_200_text_xml_byte_string = r.content

        return res

    