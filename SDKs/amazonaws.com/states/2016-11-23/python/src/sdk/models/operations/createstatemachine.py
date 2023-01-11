import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createstatemachineinput as shared_createstatemachineinput
from ..shared import createstatemachineoutput as shared_createstatemachineoutput

class CreateStateMachineXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE = "AWSStepFunctions.CreateStateMachine"


@dataclasses.dataclass
class CreateStateMachineHeaders:
    x_amz_target: CreateStateMachineXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateStateMachineRequest:
    headers: CreateStateMachineHeaders = dataclasses.field()
    request: shared_createstatemachineinput.CreateStateMachineInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateStateMachineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_state_machine_output: Optional[shared_createstatemachineoutput.CreateStateMachineOutput] = dataclasses.field(default=None)
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    invalid_definition: Optional[Any] = dataclasses.field(default=None)
    invalid_logging_configuration: Optional[Any] = dataclasses.field(default=None)
    invalid_name: Optional[Any] = dataclasses.field(default=None)
    invalid_tracing_configuration: Optional[Any] = dataclasses.field(default=None)
    state_machine_already_exists: Optional[Any] = dataclasses.field(default=None)
    state_machine_deleting: Optional[Any] = dataclasses.field(default=None)
    state_machine_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    state_machine_type_not_supported: Optional[Any] = dataclasses.field(default=None)
    too_many_tags: Optional[Any] = dataclasses.field(default=None)
    
