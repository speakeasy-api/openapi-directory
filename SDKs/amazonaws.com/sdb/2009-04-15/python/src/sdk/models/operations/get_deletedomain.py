import dataclasses
from typing import Optional
from enum import Enum

class GetDeleteDomainActionEnum(str, Enum):
    DELETE_DOMAIN = "DeleteDomain"

class GetDeleteDomainVersionEnum(str, Enum):
    TWO_THOUSAND_AND_NINE_04_15 = "2009-04-15"


@dataclasses.dataclass
class GetDeleteDomainQueryParams:
    aws_access_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetDeleteDomainActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    domain_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'DomainName', 'style': 'form', 'explode': True }})
    signature: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetDeleteDomainVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDeleteDomainRequest:
    query_params: GetDeleteDomainQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeleteDomainResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
