import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import acknowledgealarmactionrequest as shared_acknowledgealarmactionrequest
from ..shared import batchacknowledgealarmresponse as shared_batchacknowledgealarmresponse


@dataclasses.dataclass
class BatchAcknowledgeAlarmHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class BatchAcknowledgeAlarmRequestBody:
    acknowledge_action_requests: list[shared_acknowledgealarmactionrequest.AcknowledgeAlarmActionRequest] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgeActionRequests') }})
    

@dataclasses.dataclass
class BatchAcknowledgeAlarmRequest:
    headers: BatchAcknowledgeAlarmHeaders = dataclasses.field()
    request: BatchAcknowledgeAlarmRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class BatchAcknowledgeAlarmResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch_acknowledge_alarm_response: Optional[shared_batchacknowledgealarmresponse.BatchAcknowledgeAlarmResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
