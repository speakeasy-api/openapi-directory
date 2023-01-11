import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatestatemachineinput as shared_updatestatemachineinput
from ..shared import updatestatemachineoutput as shared_updatestatemachineoutput

class UpdateStateMachineXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE = "AWSStepFunctions.UpdateStateMachine"


@dataclasses.dataclass
class UpdateStateMachineHeaders:
    x_amz_target: UpdateStateMachineXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateStateMachineRequest:
    headers: UpdateStateMachineHeaders = dataclasses.field()
    request: shared_updatestatemachineinput.UpdateStateMachineInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateStateMachineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    invalid_definition: Optional[Any] = dataclasses.field(default=None)
    invalid_logging_configuration: Optional[Any] = dataclasses.field(default=None)
    invalid_tracing_configuration: Optional[Any] = dataclasses.field(default=None)
    missing_required_parameter: Optional[Any] = dataclasses.field(default=None)
    state_machine_deleting: Optional[Any] = dataclasses.field(default=None)
    state_machine_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    update_state_machine_output: Optional[shared_updatestatemachineoutput.UpdateStateMachineOutput] = dataclasses.field(default=None)
    
