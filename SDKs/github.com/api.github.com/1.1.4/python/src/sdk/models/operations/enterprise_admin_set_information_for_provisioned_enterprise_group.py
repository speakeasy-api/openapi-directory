import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scim_enterprise_group as shared_scim_enterprise_group


@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams:
    enterprise: str = dataclasses.field(metadata={'path_param': { 'field_name': 'enterprise', 'style': 'simple', 'explode': False }})
    scim_group_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'scim_group_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers:
    value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody:
    display_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    schemas: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    members: Optional[list[EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBodyMembers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    

@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequest:
    path_params: EnterpriseAdminSetInformationForProvisionedEnterpriseGroupPathParams = dataclasses.field()
    request: Optional[EnterpriseAdminSetInformationForProvisionedEnterpriseGroupRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminSetInformationForProvisionedEnterpriseGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    scim_enterprise_group: Optional[shared_scim_enterprise_group.ScimEnterpriseGroup] = dataclasses.field(default=None)
    
