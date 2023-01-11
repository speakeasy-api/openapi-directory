import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getthirdpartyjobdetailsinput as shared_getthirdpartyjobdetailsinput
from ..shared import getthirdpartyjobdetailsoutput as shared_getthirdpartyjobdetailsoutput

class GetThirdPartyJobDetailsXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_GET_THIRD_PARTY_JOB_DETAILS = "CodePipeline_20150709.GetThirdPartyJobDetails"


@dataclasses.dataclass
class GetThirdPartyJobDetailsHeaders:
    x_amz_target: GetThirdPartyJobDetailsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetThirdPartyJobDetailsRequest:
    headers: GetThirdPartyJobDetailsHeaders = dataclasses.field()
    request: shared_getthirdpartyjobdetailsinput.GetThirdPartyJobDetailsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetThirdPartyJobDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_third_party_job_details_output: Optional[shared_getthirdpartyjobdetailsoutput.GetThirdPartyJobDetailsOutput] = dataclasses.field(default=None)
    invalid_client_token_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_job_exception: Optional[Any] = dataclasses.field(default=None)
    job_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
