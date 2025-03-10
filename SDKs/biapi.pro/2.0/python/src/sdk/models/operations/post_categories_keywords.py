"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import keyword as shared_keyword
from typing import Optional


@dataclasses.dataclass
class PostCategoriesKeywordsRequest:
    
    expand: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})  
    

@dataclasses.dataclass
class PostCategoriesKeywordsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    keyword: Optional[shared_keyword.Keyword] = dataclasses.field(default=None)
    r"""Successful POST on Keyword resource"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    