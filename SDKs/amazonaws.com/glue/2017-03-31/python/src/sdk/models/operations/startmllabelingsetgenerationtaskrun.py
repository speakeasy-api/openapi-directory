import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startmllabelingsetgenerationtaskrunrequest as shared_startmllabelingsetgenerationtaskrunrequest
from ..shared import startmllabelingsetgenerationtaskrunresponse as shared_startmllabelingsetgenerationtaskrunresponse

class StartMlLabelingSetGenerationTaskRunXAmzTargetEnum(str, Enum):
    AWS_GLUE_START_ML_LABELING_SET_GENERATION_TASK_RUN = "AWSGlue.StartMLLabelingSetGenerationTaskRun"


@dataclasses.dataclass
class StartMlLabelingSetGenerationTaskRunHeaders:
    x_amz_target: StartMlLabelingSetGenerationTaskRunXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartMlLabelingSetGenerationTaskRunRequest:
    headers: StartMlLabelingSetGenerationTaskRunHeaders = dataclasses.field()
    request: shared_startmllabelingsetgenerationtaskrunrequest.StartMlLabelingSetGenerationTaskRunRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartMlLabelingSetGenerationTaskRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_runs_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    start_ml_labeling_set_generation_task_run_response: Optional[shared_startmllabelingsetgenerationtaskrunresponse.StartMlLabelingSetGenerationTaskRunResponse] = dataclasses.field(default=None)
    
