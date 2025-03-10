"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import document as shared_document
from ..shared import security as shared_security
from ..shared import serviceerror as shared_serviceerror
from typing import Optional


@dataclasses.dataclass
class PatchDocumentsIDSecurity:
    
    api_key_auth: Optional[str] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-API-Key' }})  
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})  
    

@dataclasses.dataclass
class PatchDocumentsIDRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the document to be updated."""  
    document_input: Optional[shared_document.DocumentInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})  
    

@dataclasses.dataclass
class PatchDocumentsIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    document: Optional[shared_document.Document] = dataclasses.field(default=None)
    r"""OK - the request has succeeded."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    service_error: Optional[shared_serviceerror.ServiceError] = dataclasses.field(default=None)
    r"""Bad Request - a problem reading or understanding the request."""  
    