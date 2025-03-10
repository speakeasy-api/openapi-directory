"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from typing import Optional


@dataclasses.dataclass
class OrgsSetPublicMembershipForAuthenticatedUserRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})  
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class OrgsSetPublicMembershipForAuthenticatedUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Forbidden"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    