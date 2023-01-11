import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteevaluationresultsrequest as shared_deleteevaluationresultsrequest

class DeleteEvaluationResultsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_EVALUATION_RESULTS = "StarlingDoveService.DeleteEvaluationResults"


@dataclasses.dataclass
class DeleteEvaluationResultsHeaders:
    x_amz_target: DeleteEvaluationResultsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteEvaluationResultsRequest:
    headers: DeleteEvaluationResultsHeaders = dataclasses.field()
    request: shared_deleteevaluationresultsrequest.DeleteEvaluationResultsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteEvaluationResultsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_evaluation_results_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    no_such_config_rule_exception: Optional[Any] = dataclasses.field(default=None)
    resource_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    
