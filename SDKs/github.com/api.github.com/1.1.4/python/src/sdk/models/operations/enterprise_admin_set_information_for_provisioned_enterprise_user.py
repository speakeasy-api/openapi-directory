import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_enterprise_user as shared_scim_enterprise_user


@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails:
    primary: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups:
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName:
    family_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody:
    emails: list[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyEmails] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    name: EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyName = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    user_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    groups: Optional[list[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBodyGroups]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    

@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequest:
    path_params: EnterpriseAdminSetInformationForProvisionedEnterpriseUserPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminSetInformationForProvisionedEnterpriseUserRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_user: Optional[shared_scim_enterprise_user.ScimEnterpriseUser] = dataclasses.field(default=None)
    
