import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetDescribeLoadBalancerPolicyTypesActionEnum(str, Enum):
    DESCRIBE_LOAD_BALANCER_POLICY_TYPES = "DescribeLoadBalancerPolicyTypes"

class GetDescribeLoadBalancerPolicyTypesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclasses.dataclass
class GetDescribeLoadBalancerPolicyTypesQueryParams:
    action: GetDescribeLoadBalancerPolicyTypesActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeLoadBalancerPolicyTypesVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    policy_type_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PolicyTypeNames', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetDescribeLoadBalancerPolicyTypesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDescribeLoadBalancerPolicyTypesRequest:
    headers: GetDescribeLoadBalancerPolicyTypesHeaders = dataclasses.field()
    query_params: GetDescribeLoadBalancerPolicyTypesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDescribeLoadBalancerPolicyTypesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
