import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import startondemandaudittaskresponse as shared_startondemandaudittaskresponse


@dataclasses.dataclass
class StartOnDemandAuditTaskHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class StartOnDemandAuditTaskRequestBody:
    target_check_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCheckNames') }})
    

@dataclasses.dataclass
class StartOnDemandAuditTaskRequest:
    headers: StartOnDemandAuditTaskHeaders = dataclasses.field()
    request: StartOnDemandAuditTaskRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartOnDemandAuditTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    start_on_demand_audit_task_response: Optional[shared_startondemandaudittaskresponse.StartOnDemandAuditTaskResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
