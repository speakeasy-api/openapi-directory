"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error as shared_error
from ..shared import listingextraattributes as shared_listingextraattributes
from typing import Optional


@dataclasses.dataclass
class GetListingCarIDExtraRequest:
    
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    r"""Listing id to get all the listing attributes"""  
    api_key: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    r"""The API Authentication Key. Mandatory with all API calls."""  
    

@dataclasses.dataclass
class GetListingCarIDExtraResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    r"""Error"""  
    listing_extra_attributes: Optional[shared_listingextraattributes.ListingExtraAttributes] = dataclasses.field(default=None)
    r"""ListingAttributes for the given listing id"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    