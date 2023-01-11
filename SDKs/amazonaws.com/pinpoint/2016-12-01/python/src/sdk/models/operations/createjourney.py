import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activity as shared_activity
from ..shared import journeylimits as shared_journeylimits
from ..shared import quiettime as shared_quiettime
from ..shared import journeyschedule as shared_journeyschedule
from ..shared import startcondition as shared_startcondition
from ..shared import state_enum as shared_state_enum
from ..shared import createjourneyresponse as shared_createjourneyresponse


@dataclasses.dataclass
class CreateJourneyPathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateJourneyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateJourneyRequestBodyWriteJourneyRequest:
    r"""CreateJourneyRequestBodyWriteJourneyRequest
    Specifies the configuration and other settings for a journey.
    """
    
    activities: Optional[dict[str, shared_activity.Activity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Activities') }})
    creation_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    limits: Optional[shared_journeylimits.JourneyLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limits') }})
    local_time: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    quiet_time: Optional[shared_quiettime.QuietTime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    refresh_frequency: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshFrequency') }})
    refresh_on_segment_update: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RefreshOnSegmentUpdate') }})
    schedule: Optional[shared_journeyschedule.JourneySchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    start_activity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartActivity') }})
    start_condition: Optional[shared_startcondition.StartCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartCondition') }})
    state: Optional[shared_state_enum.StateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    wait_for_quiet_time: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WaitForQuietTime') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateJourneyRequestBody:
    write_journey_request: CreateJourneyRequestBodyWriteJourneyRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WriteJourneyRequest') }})
    

@dataclasses.dataclass
class CreateJourneyRequest:
    headers: CreateJourneyHeaders = dataclasses.field()
    path_params: CreateJourneyPathParams = dataclasses.field()
    request: CreateJourneyRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateJourneyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    create_journey_response: Optional[shared_createjourneyresponse.CreateJourneyResponse] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    
