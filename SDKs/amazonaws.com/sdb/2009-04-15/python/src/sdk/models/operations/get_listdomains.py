"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from enum import Enum
from typing import Optional

class GETListDomainsActionEnum(str, Enum):
    LIST_DOMAINS = 'ListDomains'

class GETListDomainsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = '2009-04-15'


@dataclasses.dataclass
class GETListDomainsRequest:
    
    action: GETListDomainsActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})  
    aws_access_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})  
    signature: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})  
    signature_method: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})  
    signature_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})  
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})  
    version: GETListDomainsVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})  
    max_number_of_domains: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxNumberOfDomains', 'style': 'form', 'explode': True }})
    r"""The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100."""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    r"""A string informing Amazon SimpleDB where to start the next list of domain names."""  
    

@dataclasses.dataclass
class GETListDomainsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    