import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetTerminateInstanceInAutoScalingGroupActionEnum(str, Enum):
    TERMINATE_INSTANCE_IN_AUTO_SCALING_GROUP = "TerminateInstanceInAutoScalingGroup"

class GetTerminateInstanceInAutoScalingGroupVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclasses.dataclass
class GetTerminateInstanceInAutoScalingGroupQueryParams:
    action: GetTerminateInstanceInAutoScalingGroupActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    instance_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    should_decrement_desired_capacity: bool = dataclasses.field(metadata={'query_param': { 'field_name': 'ShouldDecrementDesiredCapacity', 'style': 'form', 'explode': True }})
    version: GetTerminateInstanceInAutoScalingGroupVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTerminateInstanceInAutoScalingGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTerminateInstanceInAutoScalingGroupRequest:
    headers: GetTerminateInstanceInAutoScalingGroupHeaders = dataclasses.field()
    query_params: GetTerminateInstanceInAutoScalingGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTerminateInstanceInAutoScalingGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
