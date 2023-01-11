import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetSetIPAddressTypeActionEnum(str, Enum):
    SET_IP_ADDRESS_TYPE = "SetIpAddressType"

class GetSetIPAddressTypeIPAddressTypeEnum(str, Enum):
    IPV4 = "ipv4"
    DUALSTACK = "dualstack"

class GetSetIPAddressTypeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_12_01 = "2015-12-01"


@dataclasses.dataclass
class GetSetIPAddressTypeQueryParams:
    action: GetSetIPAddressTypeActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    ip_address_type: GetSetIPAddressTypeIPAddressTypeEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'IpAddressType', 'style': 'form', 'explode': True }})
    load_balancer_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'LoadBalancerArn', 'style': 'form', 'explode': True }})
    version: GetSetIPAddressTypeVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetSetIPAddressTypeHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetSetIPAddressTypeRequest:
    headers: GetSetIPAddressTypeHeaders = dataclasses.field()
    query_params: GetSetIPAddressTypeQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetSetIPAddressTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
