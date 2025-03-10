"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import error401 as shared_error401
from ..shared import error500 as shared_error500
from ..shared import nhphoto as shared_nhphoto
from typing import Optional


@dataclasses.dataclass
class GetNhPhotosRequest:
    
    accept_version: str = dataclasses.field(metadata={'header': { 'field_name': 'Accept-Version', 'style': 'simple', 'explode': False }})
    r"""The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes."""  
    x_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'X-API-KEY', 'style': 'simple', 'explode': False }})
    r"""Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API."""  
    excludedetails: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'excludedetails', 'style': 'form', 'explode': True }})
    r"""When set to `true`, only item names are returned. Instead of an array of objects with all details, the return will be an array of strings."""  
    

@dataclasses.dataclass
class GetNhPhotosResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error401: Optional[shared_error401.Error401] = dataclasses.field(default=None)
    r"""Failed to authenticate user from `X-API-KEY`."""  
    error500: Optional[shared_error500.Error500] = dataclasses.field(default=None)
    r"""There was an error fetching the requested data."""  
    nh_photos: Optional[list[shared_nhphoto.NHPhoto]] = dataclasses.field(default=None)
    r"""A JSON array of photos and posters."""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    