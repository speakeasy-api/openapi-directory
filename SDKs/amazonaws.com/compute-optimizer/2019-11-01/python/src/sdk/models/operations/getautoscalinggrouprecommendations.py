import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getautoscalinggrouprecommendationsrequest as shared_getautoscalinggrouprecommendationsrequest
from ..shared import getautoscalinggrouprecommendationsresponse as shared_getautoscalinggrouprecommendationsresponse

class GetAutoScalingGroupRecommendationsXAmzTargetEnum(str, Enum):
    COMPUTE_OPTIMIZER_SERVICE_GET_AUTO_SCALING_GROUP_RECOMMENDATIONS = "ComputeOptimizerService.GetAutoScalingGroupRecommendations"


@dataclasses.dataclass
class GetAutoScalingGroupRecommendationsHeaders:
    x_amz_target: GetAutoScalingGroupRecommendationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetAutoScalingGroupRecommendationsRequest:
    headers: GetAutoScalingGroupRecommendationsHeaders = dataclasses.field()
    request: shared_getautoscalinggrouprecommendationsrequest.GetAutoScalingGroupRecommendationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetAutoScalingGroupRecommendationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    get_auto_scaling_group_recommendations_response: Optional[shared_getautoscalinggrouprecommendationsresponse.GetAutoScalingGroupRecommendationsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    missing_authentication_token: Optional[Any] = dataclasses.field(default=None)
    opt_in_required_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
