import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import retrystageexecutioninput as shared_retrystageexecutioninput
from ..shared import retrystageexecutionoutput as shared_retrystageexecutionoutput

class RetryStageExecutionXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_RETRY_STAGE_EXECUTION = "CodePipeline_20150709.RetryStageExecution"


@dataclasses.dataclass
class RetryStageExecutionHeaders:
    x_amz_target: RetryStageExecutionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RetryStageExecutionRequest:
    headers: RetryStageExecutionHeaders = dataclasses.field()
    request: shared_retrystageexecutioninput.RetryStageExecutionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RetryStageExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    not_latest_pipeline_execution_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    retry_stage_execution_output: Optional[shared_retrystageexecutionoutput.RetryStageExecutionOutput] = dataclasses.field(default=None)
    stage_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    stage_not_retryable_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
