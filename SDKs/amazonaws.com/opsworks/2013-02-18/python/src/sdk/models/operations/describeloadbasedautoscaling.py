import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeloadbasedautoscalingrequest as shared_describeloadbasedautoscalingrequest
from ..shared import describeloadbasedautoscalingresult as shared_describeloadbasedautoscalingresult

class DescribeLoadBasedAutoScalingXAmzTargetEnum(str, Enum):
    OPS_WORKS_20130218_DESCRIBE_LOAD_BASED_AUTO_SCALING = "OpsWorks_20130218.DescribeLoadBasedAutoScaling"


@dataclasses.dataclass
class DescribeLoadBasedAutoScalingHeaders:
    x_amz_target: DescribeLoadBasedAutoScalingXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeLoadBasedAutoScalingRequest:
    headers: DescribeLoadBasedAutoScalingHeaders = dataclasses.field()
    request: shared_describeloadbasedautoscalingrequest.DescribeLoadBasedAutoScalingRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeLoadBasedAutoScalingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_load_based_auto_scaling_result: Optional[shared_describeloadbasedautoscalingresult.DescribeLoadBasedAutoScalingResult] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
