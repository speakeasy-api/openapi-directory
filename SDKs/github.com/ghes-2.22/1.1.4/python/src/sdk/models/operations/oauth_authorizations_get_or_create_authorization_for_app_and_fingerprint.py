import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorization as shared_authorization
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams:
    client_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'client_id', 'style': 'simple', 'explode': False }})
    fingerprint: str = dataclasses.field(metadata={'path_param': { 'field_name': 'fingerprint', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody:
    client_secret: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    note_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note_url') }})
    scopes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    

@dataclasses.dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest:
    path_params: OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintPathParams = dataclasses.field()
    request: Optional[OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    authorization: Optional[shared_authorization.Authorization] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
