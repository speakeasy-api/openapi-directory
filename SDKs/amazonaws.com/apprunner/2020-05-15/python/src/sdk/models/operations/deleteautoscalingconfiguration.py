import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteautoscalingconfigurationrequest as shared_deleteautoscalingconfigurationrequest
from ..shared import deleteautoscalingconfigurationresponse as shared_deleteautoscalingconfigurationresponse

class DeleteAutoScalingConfigurationXAmzTargetEnum(str, Enum):
    APP_RUNNER_DELETE_AUTO_SCALING_CONFIGURATION = "AppRunner.DeleteAutoScalingConfiguration"


@dataclasses.dataclass
class DeleteAutoScalingConfigurationHeaders:
    x_amz_target: DeleteAutoScalingConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAutoScalingConfigurationRequest:
    headers: DeleteAutoScalingConfigurationHeaders = dataclasses.field()
    request: shared_deleteautoscalingconfigurationrequest.DeleteAutoScalingConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteAutoScalingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_auto_scaling_configuration_response: Optional[shared_deleteautoscalingconfigurationresponse.DeleteAutoScalingConfigurationResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
