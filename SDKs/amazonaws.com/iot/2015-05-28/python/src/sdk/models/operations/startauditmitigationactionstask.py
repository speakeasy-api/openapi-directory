import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startauditmitigationactionstaskresponse as shared_startauditmitigationactionstaskresponse


@dataclasses.dataclass
class StartAuditMitigationActionsTaskPathParams:
    task_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'taskId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartAuditMitigationActionsTaskHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class StartAuditMitigationActionsTaskRequestBodyTarget:
    r"""StartAuditMitigationActionsTaskRequestBodyTarget
    Used in MitigationActionParams, this information identifies the target findings to which the mitigation actions are applied. Only one entry appears.
    """
    
    audit_check_to_reason_code_filter: Optional[dict[str, list[str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToReasonCodeFilter') }})
    audit_task_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditTaskId') }})
    finding_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingIds') }})
    

@dataclass_json
@dataclasses.dataclass
class StartAuditMitigationActionsTaskRequestBody:
    audit_check_to_actions_mapping: dict[str, list[str]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditCheckToActionsMapping') }})
    client_request_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientRequestToken') }})
    target: StartAuditMitigationActionsTaskRequestBodyTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    

@dataclasses.dataclass
class StartAuditMitigationActionsTaskRequest:
    headers: StartAuditMitigationActionsTaskHeaders = dataclasses.field()
    path_params: StartAuditMitigationActionsTaskPathParams = dataclasses.field()
    request: StartAuditMitigationActionsTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartAuditMitigationActionsTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    start_audit_mitigation_actions_task_response: Optional[shared_startauditmitigationactionstaskresponse.StartAuditMitigationActionsTaskResponse] = dataclasses.field(default=None)
    task_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
