import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getpipelineexecutioninput as shared_getpipelineexecutioninput
from ..shared import getpipelineexecutionoutput as shared_getpipelineexecutionoutput

class GetPipelineExecutionXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_GET_PIPELINE_EXECUTION = "CodePipeline_20150709.GetPipelineExecution"


@dataclasses.dataclass
class GetPipelineExecutionHeaders:
    x_amz_target: GetPipelineExecutionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPipelineExecutionRequest:
    headers: GetPipelineExecutionHeaders = dataclasses.field()
    request: shared_getpipelineexecutioninput.GetPipelineExecutionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetPipelineExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_pipeline_execution_output: Optional[shared_getpipelineexecutionoutput.GetPipelineExecutionOutput] = dataclasses.field(default=None)
    pipeline_execution_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
