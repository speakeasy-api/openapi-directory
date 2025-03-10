"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import errorresponse as shared_errorresponse
from ..shared import numberlist as shared_numberlist
from typing import Optional


@dataclasses.dataclass
class FindNumbersLocalSecurity:
    
    password: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'password' }})  
    username: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic', 'field_name': 'username' }})  
    

@dataclasses.dataclass
class FindNumbersLocalRequest:
    
    city: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    r"""A city name"""  
    fields_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    r"""Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page."""  
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    r"""To set the maximum number of records to return in a paged list response. The default is 100"""  
    prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'prefix', 'style': 'form', 'explode': True }})
    r"""A 4-7 digit prefix"""  
    state: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    r"""A two-letter state code. Example: CA, IL, etc."""  
    zipcode: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'zipcode', 'style': 'form', 'explode': True }})
    r"""A five-digit Zipcode"""  
    

@dataclasses.dataclass
class FindNumbersLocalResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    r"""Bad request"""  
    number_list: Optional[shared_numberlist.NumberList] = dataclasses.field(default=None)
    r"""successful operation"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    