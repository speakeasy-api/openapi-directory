import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startdetectmitigationactionstaskresponse as shared_startdetectmitigationactionstaskresponse


@dataclasses.dataclass
class StartDetectMitigationActionsTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartDetectMitigationActionsTaskHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class StartDetectMitigationActionsTaskRequestBodyTarget:
    r"""StartDetectMitigationActionsTaskRequestBodyTarget
     The target of a mitigation action task. 
    """
    
    behavior_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behaviorName') }})
    security_profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityProfileName') }})
    violation_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationIds') }})
    

@dataclass_json
@dataclasses.dataclass
class StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange:
    r"""StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange
     Specifies the time period of which violation events occurred between. 
    """
    
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclasses.dataclass
class StartDetectMitigationActionsTaskRequestBody:
    actions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actions') }})
    client_request_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    target: StartDetectMitigationActionsTaskRequestBodyTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    include_only_active_violations: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeOnlyActiveViolations') }})
    include_suppressed_alerts: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSuppressedAlerts') }})
    violation_event_occurrence_range: Optional[StartDetectMitigationActionsTaskRequestBodyViolationEventOccurrenceRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('violationEventOccurrenceRange') }})
    

@dataclasses.dataclass
class StartDetectMitigationActionsTaskRequest:
    headers: StartDetectMitigationActionsTaskHeaders = dataclasses.field()
    path_params: StartDetectMitigationActionsTaskPathParams = dataclasses.field()
    request: StartDetectMitigationActionsTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartDetectMitigationActionsTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    start_detect_mitigation_actions_task_response: Optional[shared_startdetectmitigationactionstaskresponse.StartDetectMitigationActionsTaskResponse] = dataclasses.field(default=None)
    task_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
