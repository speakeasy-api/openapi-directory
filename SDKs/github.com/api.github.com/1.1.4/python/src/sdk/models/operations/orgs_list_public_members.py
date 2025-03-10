"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import simple_user as shared_simple_user
from typing import Optional


@dataclasses.dataclass
class OrgsListPublicMembersRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    r"""The organization name. The name is not case sensitive."""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""The number of results per page (max 100)."""  
    

@dataclasses.dataclass
class OrgsListPublicMembersResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    headers: Optional[dict[str, list[str]]] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    r"""Response"""  
    