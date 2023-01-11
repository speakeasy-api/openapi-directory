import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import schedulerunrequest as shared_schedulerunrequest
from ..shared import schedulerunresult as shared_schedulerunresult

class ScheduleRunXAmzTargetEnum(str, Enum):
    DEVICE_FARM_20150623_SCHEDULE_RUN = "DeviceFarm_20150623.ScheduleRun"


@dataclasses.dataclass
class ScheduleRunHeaders:
    x_amz_target: ScheduleRunXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ScheduleRunRequest:
    headers: ScheduleRunHeaders = dataclasses.field()
    request: shared_schedulerunrequest.ScheduleRunRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScheduleRunResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    argument_exception: Optional[Any] = dataclasses.field(default=None)
    idempotency_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    schedule_run_result: Optional[shared_schedulerunresult.ScheduleRunResult] = dataclasses.field(default=None)
    service_account_exception: Optional[Any] = dataclasses.field(default=None)
    
