"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import api_core_responses_countresponce as shared_api_core_responses_countresponce
from enum import Enum
from typing import Optional

class ConversionsCountStatusEnum(str, Enum):
    r"""Status of conversion (\\"deleted\\"/\\"active\\")"""
    DELETED = 'deleted'
    ACTIVE = 'active'


@dataclasses.dataclass
class ConversionsCountRequest:
    
    created_after: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdAfter', 'style': 'form', 'explode': True }})
    r"""Exclude conversions created before this date (YYYYMMDD)"""  
    created_before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'createdBefore', 'style': 'form', 'explode': True }})
    r"""Exclude conversions created after this date (YYYYMMDD)"""  
    status: Optional[ConversionsCountStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    r"""Status of conversion (\\"deleted\\"/\\"active\\")"""  
    text_search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'textSearch', 'style': 'form', 'explode': True }})
    r"""Filter fields by this pattern"""  
    

@dataclasses.dataclass
class ConversionsCountResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    api_core_responses_count_responce: Optional[shared_api_core_responses_countresponce.APICoreResponsesCountResponce] = dataclasses.field(default=None)  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    