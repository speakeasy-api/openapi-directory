import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updatepipelineinput as shared_updatepipelineinput
from ..shared import updatepipelineoutput as shared_updatepipelineoutput

class UpdatePipelineXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_UPDATE_PIPELINE = "CodePipeline_20150709.UpdatePipeline"


@dataclasses.dataclass
class UpdatePipelineHeaders:
    x_amz_target: UpdatePipelineXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePipelineRequest:
    headers: UpdatePipelineHeaders = dataclasses.field()
    request: shared_updatepipelineinput.UpdatePipelineInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePipelineResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_action_declaration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_blocker_declaration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_stage_declaration_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_structure_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    update_pipeline_output: Optional[shared_updatepipelineoutput.UpdatePipelineOutput] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
