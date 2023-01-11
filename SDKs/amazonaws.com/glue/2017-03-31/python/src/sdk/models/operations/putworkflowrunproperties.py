import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putworkflowrunpropertiesrequest as shared_putworkflowrunpropertiesrequest

class PutWorkflowRunPropertiesXAmzTargetEnum(str, Enum):
    AWS_GLUE_PUT_WORKFLOW_RUN_PROPERTIES = "AWSGlue.PutWorkflowRunProperties"


@dataclasses.dataclass
class PutWorkflowRunPropertiesHeaders:
    x_amz_target: PutWorkflowRunPropertiesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutWorkflowRunPropertiesRequest:
    headers: PutWorkflowRunPropertiesHeaders = dataclasses.field()
    request: shared_putworkflowrunpropertiesrequest.PutWorkflowRunPropertiesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutWorkflowRunPropertiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    put_workflow_run_properties_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_number_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
