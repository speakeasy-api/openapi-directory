import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putlifecycleeventhookexecutionstatusinput as shared_putlifecycleeventhookexecutionstatusinput
from ..shared import putlifecycleeventhookexecutionstatusoutput as shared_putlifecycleeventhookexecutionstatusoutput

class PutLifecycleEventHookExecutionStatusXAmzTargetEnum(str, Enum):
    CODE_DEPLOY_20141006_PUT_LIFECYCLE_EVENT_HOOK_EXECUTION_STATUS = "CodeDeploy_20141006.PutLifecycleEventHookExecutionStatus"


@dataclasses.dataclass
class PutLifecycleEventHookExecutionStatusHeaders:
    x_amz_target: PutLifecycleEventHookExecutionStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutLifecycleEventHookExecutionStatusRequest:
    headers: PutLifecycleEventHookExecutionStatusHeaders = dataclasses.field()
    request: shared_putlifecycleeventhookexecutionstatusinput.PutLifecycleEventHookExecutionStatusInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutLifecycleEventHookExecutionStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    deployment_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    deployment_id_required_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_deployment_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_lifecycle_event_hook_execution_id_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_lifecycle_event_hook_execution_status_exception: Optional[Any] = dataclasses.field(default=None)
    lifecycle_event_already_completed_exception: Optional[Any] = dataclasses.field(default=None)
    put_lifecycle_event_hook_execution_status_output: Optional[shared_putlifecycleeventhookexecutionstatusoutput.PutLifecycleEventHookExecutionStatusOutput] = dataclasses.field(default=None)
    unsupported_action_for_deployment_type_exception: Optional[Any] = dataclasses.field(default=None)
    
