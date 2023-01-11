import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putthirdpartyjobfailureresultinput as shared_putthirdpartyjobfailureresultinput

class PutThirdPartyJobFailureResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_THIRD_PARTY_JOB_FAILURE_RESULT = "CodePipeline_20150709.PutThirdPartyJobFailureResult"


@dataclasses.dataclass
class PutThirdPartyJobFailureResultHeaders:
    x_amz_target: PutThirdPartyJobFailureResultXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutThirdPartyJobFailureResultRequest:
    headers: PutThirdPartyJobFailureResultHeaders = dataclasses.field()
    request: shared_putthirdpartyjobfailureresultinput.PutThirdPartyJobFailureResultInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutThirdPartyJobFailureResultResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_client_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_job_state_exception: Optional[Any] = dataclasses.field(default=None)
    job_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
