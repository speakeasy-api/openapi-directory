import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorization as shared_authorization
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationPathParams:
    authorization_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'authorization_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationRequestBody:
    add_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_scopes') }})
    fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    remove_scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remove_scopes') }})
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationRequest:
    path_params: OauthAuthorizationsUpdateAuthorizationPathParams = dataclasses.field()
    request: Optional[OauthAuthorizationsUpdateAuthorizationRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OauthAuthorizationsUpdateAuthorizationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
