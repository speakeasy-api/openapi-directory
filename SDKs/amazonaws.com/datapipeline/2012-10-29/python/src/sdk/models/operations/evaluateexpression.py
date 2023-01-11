import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import evaluateexpressioninput as shared_evaluateexpressioninput
from ..shared import evaluateexpressionoutput as shared_evaluateexpressionoutput

class EvaluateExpressionXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_EVALUATE_EXPRESSION = "DataPipeline.EvaluateExpression"


@dataclasses.dataclass
class EvaluateExpressionHeaders:
    x_amz_target: EvaluateExpressionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EvaluateExpressionRequest:
    headers: EvaluateExpressionHeaders = dataclasses.field()
    request: shared_evaluateexpressioninput.EvaluateExpressionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EvaluateExpressionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    evaluate_expression_output: Optional[shared_evaluateexpressionoutput.EvaluateExpressionOutput] = dataclasses.field(default=None)
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_deleted_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    task_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
