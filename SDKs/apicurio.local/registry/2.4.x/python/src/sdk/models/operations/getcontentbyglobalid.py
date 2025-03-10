"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error as shared_error
from typing import Optional


@dataclasses.dataclass
class GetContentByGlobalIDRequest:
    
    global_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'globalId', 'style': 'simple', 'explode': False }})
    r"""Global identifier for an artifact version."""  
    dereference: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dereference', 'style': 'form', 'explode': True }})
    r"""Allows the user to specify if the content should be dereferenced when being returned"""  
    

@dataclasses.dataclass
class GetContentByGlobalIDResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Common response for all operations that can return a `404` error."""  
    file_content: Optional[bytes] = dataclasses.field(default=None)
    r"""The content of one version of one artifact."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    