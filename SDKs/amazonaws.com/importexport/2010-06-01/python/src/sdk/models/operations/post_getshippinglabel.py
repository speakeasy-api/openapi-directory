import dataclasses
from typing import Optional
from enum import Enum

class PostGetShippingLabelActionEnum(str, Enum):
    GET_SHIPPING_LABEL = "GetShippingLabel"

class PostGetShippingLabelOperationEnum(str, Enum):
    GET_SHIPPING_LABEL = "GetShippingLabel"

class PostGetShippingLabelVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclasses.dataclass
class PostGetShippingLabelQueryParams:
    aws_access_key_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: PostGetShippingLabelActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    operation: PostGetShippingLabelOperationEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = dataclasses.field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = dataclasses.field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: PostGetShippingLabelVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostGetShippingLabelRequest:
    query_params: PostGetShippingLabelQueryParams = dataclasses.field()
    request: Optional[bytes] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclasses.dataclass
class PostGetShippingLabelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
