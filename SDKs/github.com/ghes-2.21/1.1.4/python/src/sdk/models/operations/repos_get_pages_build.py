"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import page_build as shared_page_build
from typing import Optional


@dataclasses.dataclass
class ReposGetPagesBuildRequest:
    
    build_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'build_id', 'style': 'simple', 'explode': False }})  
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ReposGetPagesBuildResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    page_build: Optional[shared_page_build.PageBuild] = dataclasses.field(default=None)
    r"""Response"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    