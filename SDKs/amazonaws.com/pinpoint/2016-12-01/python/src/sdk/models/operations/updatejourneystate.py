import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import state_enum as shared_state_enum
from ..shared import updatejourneystateresponse as shared_updatejourneystateresponse


@dataclasses.dataclass
class UpdateJourneyStatePathParams:
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    journey_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'journey-id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateJourneyStateHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJourneyStateRequestBodyJourneyStateRequest:
    r"""UpdateJourneyStateRequestBodyJourneyStateRequest
    Changes the status of a journey.
    """
    
    state: Optional[shared_state_enum.StateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateJourneyStateRequestBody:
    journey_state_request: UpdateJourneyStateRequestBodyJourneyStateRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('JourneyStateRequest') }})
    

@dataclasses.dataclass
class UpdateJourneyStateRequest:
    headers: UpdateJourneyStateHeaders = dataclasses.field()
    path_params: UpdateJourneyStatePathParams = dataclasses.field()
    request: UpdateJourneyStateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateJourneyStateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    update_journey_state_response: Optional[shared_updatejourneystateresponse.UpdateJourneyStateResponse] = dataclasses.field(default=None)
    
