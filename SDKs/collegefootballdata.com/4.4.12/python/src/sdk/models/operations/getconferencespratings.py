"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import conferencesprating as shared_conferencesprating
from typing import Optional


@dataclasses.dataclass
class GetConferenceSPRatingsRequest:
    
    conference: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'conference', 'style': 'form', 'explode': True }})
    r"""Conference abbreviation filter"""  
    year: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    r"""Season filter"""  
    

@dataclasses.dataclass
class GetConferenceSPRatingsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    conference_sp_ratings: Optional[list[shared_conferencesprating.ConferenceSPRating]] = dataclasses.field(default=None)
    r"""successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    