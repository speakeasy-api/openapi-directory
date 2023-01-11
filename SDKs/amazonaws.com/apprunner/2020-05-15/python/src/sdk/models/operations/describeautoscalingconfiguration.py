import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeautoscalingconfigurationrequest as shared_describeautoscalingconfigurationrequest
from ..shared import describeautoscalingconfigurationresponse as shared_describeautoscalingconfigurationresponse

class DescribeAutoScalingConfigurationXAmzTargetEnum(str, Enum):
    APP_RUNNER_DESCRIBE_AUTO_SCALING_CONFIGURATION = "AppRunner.DescribeAutoScalingConfiguration"


@dataclasses.dataclass
class DescribeAutoScalingConfigurationHeaders:
    x_amz_target: DescribeAutoScalingConfigurationXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeAutoScalingConfigurationRequest:
    headers: DescribeAutoScalingConfigurationHeaders = dataclasses.field()
    request: shared_describeautoscalingconfigurationrequest.DescribeAutoScalingConfigurationRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeAutoScalingConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_auto_scaling_configuration_response: Optional[shared_describeautoscalingconfigurationresponse.DescribeAutoScalingConfigurationResponse] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
