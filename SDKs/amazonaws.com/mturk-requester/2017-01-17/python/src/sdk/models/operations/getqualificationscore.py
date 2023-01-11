import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getqualificationscorerequest as shared_getqualificationscorerequest
from ..shared import getqualificationscoreresponse as shared_getqualificationscoreresponse

class GetQualificationScoreXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_GET_QUALIFICATION_SCORE = "MTurkRequesterServiceV20170117.GetQualificationScore"


@dataclasses.dataclass
class GetQualificationScoreHeaders:
    x_amz_target: GetQualificationScoreXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetQualificationScoreRequest:
    headers: GetQualificationScoreHeaders = dataclasses.field()
    request: shared_getqualificationscorerequest.GetQualificationScoreRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetQualificationScoreResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_qualification_score_response: Optional[shared_getqualificationscoreresponse.GetQualificationScoreResponse] = dataclasses.field(default=None)
    request_error: Optional[Any] = dataclasses.field(default=None)
    service_fault: Optional[Any] = dataclasses.field(default=None)
    
