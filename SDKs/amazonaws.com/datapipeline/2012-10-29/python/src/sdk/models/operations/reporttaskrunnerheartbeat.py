import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import reporttaskrunnerheartbeatinput as shared_reporttaskrunnerheartbeatinput
from ..shared import reporttaskrunnerheartbeatoutput as shared_reporttaskrunnerheartbeatoutput

class ReportTaskRunnerHeartbeatXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_REPORT_TASK_RUNNER_HEARTBEAT = "DataPipeline.ReportTaskRunnerHeartbeat"


@dataclasses.dataclass
class ReportTaskRunnerHeartbeatHeaders:
    x_amz_target: ReportTaskRunnerHeartbeatXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReportTaskRunnerHeartbeatRequest:
    headers: ReportTaskRunnerHeartbeatHeaders = dataclasses.field()
    request: shared_reporttaskrunnerheartbeatinput.ReportTaskRunnerHeartbeatInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ReportTaskRunnerHeartbeatResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_service_error: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    report_task_runner_heartbeat_output: Optional[shared_reporttaskrunnerheartbeatoutput.ReportTaskRunnerHeartbeatOutput] = dataclasses.field(default=None)
    
