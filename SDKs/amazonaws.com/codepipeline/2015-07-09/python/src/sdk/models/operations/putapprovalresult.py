import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putapprovalresultinput as shared_putapprovalresultinput
from ..shared import putapprovalresultoutput as shared_putapprovalresultoutput

class PutApprovalResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_APPROVAL_RESULT = "CodePipeline_20150709.PutApprovalResult"


@dataclasses.dataclass
class PutApprovalResultHeaders:
    x_amz_target: PutApprovalResultXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutApprovalResultRequest:
    headers: PutApprovalResultHeaders = dataclasses.field()
    request: shared_putapprovalresultinput.PutApprovalResultInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutApprovalResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    action_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    approval_already_completed_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_approval_token_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    put_approval_result_output: Optional[shared_putapprovalresultoutput.PutApprovalResultOutput] = dataclasses.field(default=None)
    stage_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
