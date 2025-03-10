"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import itvassignmsisdnrequest as shared_itvassignmsisdnrequest
from ..shared import serviceerror as shared_serviceerror
from typing import Optional


@dataclasses.dataclass
class AssignMsisdnSecurity:
    
    account_auth: str = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2', 'field_name': 'Authorization' }})  
    

@dataclasses.dataclass
class AssignMsisdnRequest:
    
    itv_assign_msisdn_request: shared_itvassignmsisdnrequest.ItvAssignMsisdnRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    r"""Details of an assign request."""  
    lang: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    r"""Language code for the preferred language to be returned in the response.
    
    Parameter value is case-insensitive and should be
      - a valid 2 letter language code without region such as en, de
      - or with region such as en_us, en_au
    
    If undefined then defaults to 'en', unless the server has been configured
    with a custom default.
    
    See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
    """  
    

@dataclasses.dataclass
class AssignMsisdnResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    service_error: Optional[shared_serviceerror.ServiceError] = dataclasses.field(default=None)
    r"""Failure"""  
    