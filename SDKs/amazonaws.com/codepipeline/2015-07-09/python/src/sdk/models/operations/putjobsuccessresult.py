import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putjobsuccessresultinput as shared_putjobsuccessresultinput

class PutJobSuccessResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_JOB_SUCCESS_RESULT = "CodePipeline_20150709.PutJobSuccessResult"


@dataclasses.dataclass
class PutJobSuccessResultHeaders:
    x_amz_target: PutJobSuccessResultXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutJobSuccessResultRequest:
    headers: PutJobSuccessResultHeaders = dataclasses.field()
    request: shared_putjobsuccessresultinput.PutJobSuccessResultInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutJobSuccessResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_job_state_exception: Optional[Any] = dataclasses.field(default=None)
    job_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    output_variables_size_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
