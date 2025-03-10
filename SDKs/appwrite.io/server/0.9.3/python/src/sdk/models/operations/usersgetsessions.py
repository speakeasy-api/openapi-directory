"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import sessionlist as shared_sessionlist
from typing import Optional


@dataclasses.dataclass
class UsersGetSessionsSecurity:
    
    key: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-Appwrite-Key' }})  
    project: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header', 'field_name': 'X-Appwrite-Project' }})  
    

@dataclasses.dataclass
class UsersGetSessionsRequest:
    
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    r"""User unique ID."""  
    

@dataclasses.dataclass
class UsersGetSessionsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    session_list: Optional[shared_sessionlist.SessionList] = dataclasses.field(default=None)
    r"""Sessions List"""  
    