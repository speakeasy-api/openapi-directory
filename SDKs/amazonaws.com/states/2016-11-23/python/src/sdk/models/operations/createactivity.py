import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createactivityinput as shared_createactivityinput
from ..shared import createactivityoutput as shared_createactivityoutput

class CreateActivityXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_ACTIVITY = "AWSStepFunctions.CreateActivity"


@dataclasses.dataclass
class CreateActivityHeaders:
    x_amz_target: CreateActivityXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateActivityRequest:
    headers: CreateActivityHeaders = dataclasses.field()
    request: shared_createactivityinput.CreateActivityInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    create_activity_output: Optional[shared_createactivityoutput.CreateActivityOutput] = dataclasses.field(default=None)
    invalid_name: Optional[Any] = dataclasses.field(default=None)
    too_many_tags: Optional[Any] = dataclasses.field(default=None)
    
