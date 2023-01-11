import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createautoscalingconfigurationrequest as shared_createautoscalingconfigurationrequest
from ..shared import createautoscalingconfigurationresponse as shared_createautoscalingconfigurationresponse

class CreateAutoScalingConfigurationXAmzTargetEnum(str, Enum):
    APP_RUNNER_CREATE_AUTO_SCALING_CONFIGURATION = "AppRunner.CreateAutoScalingConfiguration"


@dataclasses.dataclass
class CreateAutoScalingConfigurationHeaders:
    x_amz_target: CreateAutoScalingConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateAutoScalingConfigurationRequest:
    headers: CreateAutoScalingConfigurationHeaders = dataclasses.field()
    request: shared_createautoscalingconfigurationrequest.CreateAutoScalingConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateAutoScalingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_auto_scaling_configuration_response: Optional[shared_createautoscalingconfigurationresponse.CreateAutoScalingConfigurationResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
