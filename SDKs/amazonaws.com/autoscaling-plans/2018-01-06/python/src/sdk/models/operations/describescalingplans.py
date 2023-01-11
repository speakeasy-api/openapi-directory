import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describescalingplansrequest as shared_describescalingplansrequest
from ..shared import describescalingplansresponse as shared_describescalingplansresponse

class DescribeScalingPlansXAmzTargetEnum(str, Enum):
    ANY_SCALE_SCALING_PLANNER_FRONTEND_SERVICE_DESCRIBE_SCALING_PLANS = "AnyScaleScalingPlannerFrontendService.DescribeScalingPlans"


@dataclasses.dataclass
class DescribeScalingPlansHeaders:
    x_amz_target: DescribeScalingPlansXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeScalingPlansRequest:
    headers: DescribeScalingPlansHeaders = dataclasses.field()
    request: shared_describescalingplansrequest.DescribeScalingPlansRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeScalingPlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_update_exception: Optional[Any] = dataclasses.field(default=None)
    describe_scaling_plans_response: Optional[shared_describescalingplansresponse.DescribeScalingPlansResponse] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
