import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_enterprise_user as shared_scim_enterprise_user


@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails:
    primary: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName:
    family_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody:
    emails: list[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyEmails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    groups: Optional[list[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBodyGroups]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    

@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserRequest:
    path_params: EnterpriseAdminProvisionAndInviteEnterpriseUserPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminProvisionAndInviteEnterpriseUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_user: Optional[shared_scim_enterprise_user.ScimEnterpriseUser] = dataclasses.field(default=None)
    
