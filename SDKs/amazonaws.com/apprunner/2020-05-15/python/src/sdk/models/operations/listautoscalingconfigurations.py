import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listautoscalingconfigurationsrequest as shared_listautoscalingconfigurationsrequest
from ..shared import listautoscalingconfigurationsresponse as shared_listautoscalingconfigurationsresponse


@dataclasses.dataclass
class ListAutoScalingConfigurationsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListAutoScalingConfigurationsXAmzTargetEnum(str, Enum):
    APP_RUNNER_LIST_AUTO_SCALING_CONFIGURATIONS = "AppRunner.ListAutoScalingConfigurations"


@dataclasses.dataclass
class ListAutoScalingConfigurationsHeaders:
    x_amz_target: ListAutoScalingConfigurationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAutoScalingConfigurationsRequest:
    headers: ListAutoScalingConfigurationsHeaders = dataclasses.field()
    query_params: ListAutoScalingConfigurationsQueryParams = dataclasses.field()
    request: shared_listautoscalingconfigurationsrequest.ListAutoScalingConfigurationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListAutoScalingConfigurationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_auto_scaling_configurations_response: Optional[shared_listautoscalingconfigurationsresponse.ListAutoScalingConfigurationsResponse] = dataclasses.field(default=None)
    
