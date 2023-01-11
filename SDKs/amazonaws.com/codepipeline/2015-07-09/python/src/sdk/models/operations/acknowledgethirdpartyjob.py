import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import acknowledgethirdpartyjobinput as shared_acknowledgethirdpartyjobinput
from ..shared import acknowledgethirdpartyjoboutput as shared_acknowledgethirdpartyjoboutput

class AcknowledgeThirdPartyJobXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_ACKNOWLEDGE_THIRD_PARTY_JOB = "CodePipeline_20150709.AcknowledgeThirdPartyJob"


@dataclasses.dataclass
class AcknowledgeThirdPartyJobHeaders:
    x_amz_target: AcknowledgeThirdPartyJobXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AcknowledgeThirdPartyJobRequest:
    headers: AcknowledgeThirdPartyJobHeaders = dataclasses.field()
    request: shared_acknowledgethirdpartyjobinput.AcknowledgeThirdPartyJobInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AcknowledgeThirdPartyJobResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    acknowledge_third_party_job_output: Optional[shared_acknowledgethirdpartyjoboutput.AcknowledgeThirdPartyJobOutput] = dataclasses.field(default=None)
    invalid_client_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_nonce_exception: Optional[Any] = dataclasses.field(default=None)
    job_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
