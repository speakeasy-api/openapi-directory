import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetEnableAvailabilityZonesForLoadBalancerActionEnum(str, Enum):
    ENABLE_AVAILABILITY_ZONES_FOR_LOAD_BALANCER = "EnableAvailabilityZonesForLoadBalancer"

class GetEnableAvailabilityZonesForLoadBalancerVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclasses.dataclass
class GetEnableAvailabilityZonesForLoadBalancerQueryParams:
    action: GetEnableAvailabilityZonesForLoadBalancerActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    availability_zones: list[str] = dataclasses.field(metadata={'query_param': { 'field_name': 'AvailabilityZones', 'style': 'form', 'explode': True }})
    load_balancer_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    version: GetEnableAvailabilityZonesForLoadBalancerVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEnableAvailabilityZonesForLoadBalancerHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEnableAvailabilityZonesForLoadBalancerRequest:
    headers: GetEnableAvailabilityZonesForLoadBalancerHeaders = dataclasses.field()
    query_params: GetEnableAvailabilityZonesForLoadBalancerQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEnableAvailabilityZonesForLoadBalancerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
