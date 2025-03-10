"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class ReposGetPunchCardStatsRequest:
    
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})  
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ReposGetPunchCardStatsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    code_frequency_stats: Optional[list[list[int]]] = dataclasses.field(default=None)
    r"""For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    