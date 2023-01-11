import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeec2instancelimitsinput as shared_describeec2instancelimitsinput
from ..shared import describeec2instancelimitsoutput as shared_describeec2instancelimitsoutput

class DescribeEc2InstanceLimitsXAmzTargetEnum(str, Enum):
    GAME_LIFT_DESCRIBE_EC2_INSTANCE_LIMITS = "GameLift.DescribeEC2InstanceLimits"


@dataclasses.dataclass
class DescribeEc2InstanceLimitsHeaders:
    x_amz_target: DescribeEc2InstanceLimitsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeEc2InstanceLimitsRequest:
    headers: DescribeEc2InstanceLimitsHeaders = dataclasses.field()
    request: shared_describeec2instancelimitsinput.DescribeEc2InstanceLimitsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeEc2InstanceLimitsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_ec2_instance_limits_output: Optional[shared_describeec2instancelimitsoutput.DescribeEc2InstanceLimitsOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    
