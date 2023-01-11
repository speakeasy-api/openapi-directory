import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startremediationexecutionrequest as shared_startremediationexecutionrequest
from ..shared import startremediationexecutionresponse as shared_startremediationexecutionresponse

class StartRemediationExecutionXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_START_REMEDIATION_EXECUTION = "StarlingDoveService.StartRemediationExecution"


@dataclasses.dataclass
class StartRemediationExecutionHeaders:
    x_amz_target: StartRemediationExecutionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartRemediationExecutionRequest:
    headers: StartRemediationExecutionHeaders = dataclasses.field()
    request: shared_startremediationexecutionrequest.StartRemediationExecutionRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartRemediationExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insufficient_permissions_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_remediation_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    start_remediation_execution_response: Optional[shared_startremediationexecutionresponse.StartRemediationExecutionResponse] = dataclasses.field(default=None)
    
