import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_error as shared_scim_error
from ..shared import scim_user as shared_scim_user


@dataclasses.dataclass
class ScimProvisionAndInviteUserPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ScimProvisionAndInviteUserRequestBodyEmails:
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    primary: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimProvisionAndInviteUserRequestBodyName:
    family_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    formatted: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formatted') }})
    

@dataclass_json
@dataclasses.dataclass
class ScimProvisionAndInviteUserRequestBody:
    emails: list[ScimProvisionAndInviteUserRequestBodyEmails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: ScimProvisionAndInviteUserRequestBodyName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    active: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    groups: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    schemas: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    

@dataclasses.dataclass
class ScimProvisionAndInviteUserRequest:
    path_params: ScimProvisionAndInviteUserPathParams = dataclasses.field()
    request: Optional[ScimProvisionAndInviteUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ScimProvisionAndInviteUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_error: Optional[shared_scim_error.ScimError] = dataclasses.field(default=None)
    scim_user: Optional[shared_scim_user.ScimUser] = dataclasses.field(default=None)
    
