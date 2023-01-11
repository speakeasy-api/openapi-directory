import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putevaluationsrequest as shared_putevaluationsrequest
from ..shared import putevaluationsresponse as shared_putevaluationsresponse

class PutEvaluationsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_EVALUATIONS = "StarlingDoveService.PutEvaluations"


@dataclasses.dataclass
class PutEvaluationsHeaders:
    x_amz_target: PutEvaluationsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutEvaluationsRequest:
    headers: PutEvaluationsHeaders = dataclasses.field()
    request: shared_putevaluationsrequest.PutEvaluationsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutEvaluationsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_result_token_exception: Optional[Any] = dataclasses.field(default=None)
    no_such_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    put_evaluations_response: Optional[shared_putevaluationsresponse.PutEvaluationsResponse] = dataclasses.field(default=None)
    
