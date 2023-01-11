import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import exportec2instancerecommendationsrequest as shared_exportec2instancerecommendationsrequest
from ..shared import exportec2instancerecommendationsresponse as shared_exportec2instancerecommendationsresponse

class ExportEc2InstanceRecommendationsXAmzTargetEnum(str, Enum):
    COMPUTE_OPTIMIZER_SERVICE_EXPORT_EC2_INSTANCE_RECOMMENDATIONS = "ComputeOptimizerService.ExportEC2InstanceRecommendations"


@dataclasses.dataclass
class ExportEc2InstanceRecommendationsHeaders:
    x_amz_target: ExportEc2InstanceRecommendationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ExportEc2InstanceRecommendationsRequest:
    headers: ExportEc2InstanceRecommendationsHeaders = dataclasses.field()
    request: shared_exportec2instancerecommendationsrequest.ExportEc2InstanceRecommendationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ExportEc2InstanceRecommendationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    export_ec2_instance_recommendations_response: Optional[shared_exportec2instancerecommendationsresponse.ExportEc2InstanceRecommendationsResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    missing_authentication_token: Optional[Any] = dataclasses.field(default=None)
    opt_in_required_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
