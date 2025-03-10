"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from enum import Enum
from typing import Any, Optional


@dataclasses.dataclass
class ConvertAPIRequestBody:
    
    url: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'url' }})  
    
class ConvertAPIFormatEnum(str, Enum):
    SWAGGER10 = 'swagger10'
    SWAGGER20 = 'swagger20'
    SWAGGERYAML = 'swaggeryaml'
    APIBLUEPRINT = 'apiblueprint'
    WADL2009 = 'wadl2009'
    RAML = 'raml'
    APIMATIC = 'apimatic'


@dataclasses.dataclass
class ConvertAPIRequest:
    
    format: ConvertAPIFormatEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})  
    request_body: Optional[ConvertAPIRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})  
    

@dataclasses.dataclass
class ConvertAPIResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    convert_api_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""The converted API specification"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    