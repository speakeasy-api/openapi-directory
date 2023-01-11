import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_enterprise_group as shared_scim_enterprise_group


@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers:
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody:
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    members: Optional[list[EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBodyMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupRequest:
    path_params: EnterpriseAdminProvisionAndInviteEnterpriseGroupPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminProvisionAndInviteEnterpriseGroupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminProvisionAndInviteEnterpriseGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_group: Optional[shared_scim_enterprise_group.ScimEnterpriseGroup] = dataclasses.field(default=None)
    
