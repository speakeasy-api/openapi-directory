import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import batchstopjobrunrequest as shared_batchstopjobrunrequest
from ..shared import batchstopjobrunresponse as shared_batchstopjobrunresponse

class BatchStopJobRunXAmzTargetEnum(str, Enum):
    AWS_GLUE_BATCH_STOP_JOB_RUN = "AWSGlue.BatchStopJobRun"


@dataclasses.dataclass
class BatchStopJobRunHeaders:
    x_amz_target: BatchStopJobRunXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class BatchStopJobRunRequest:
    headers: BatchStopJobRunHeaders = dataclasses.field()
    request: shared_batchstopjobrunrequest.BatchStopJobRunRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchStopJobRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_stop_job_run_response: Optional[shared_batchstopjobrunresponse.BatchStopJobRunResponse] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    operation_timeout_exception: Optional[Any] = dataclasses.field(default=None)
    
