import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeactivityinput as shared_describeactivityinput
from ..shared import describeactivityoutput as shared_describeactivityoutput

class DescribeActivityXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_ACTIVITY = "AWSStepFunctions.DescribeActivity"


@dataclasses.dataclass
class DescribeActivityHeaders:
    x_amz_target: DescribeActivityXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeActivityRequest:
    headers: DescribeActivityHeaders = dataclasses.field()
    request: shared_describeactivityinput.DescribeActivityInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeActivityResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    describe_activity_output: Optional[shared_describeactivityoutput.DescribeActivityOutput] = dataclasses.field(default=None)
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    
