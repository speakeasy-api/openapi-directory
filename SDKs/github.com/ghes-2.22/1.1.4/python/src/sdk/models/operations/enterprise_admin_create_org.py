import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organization_simple as shared_organization_simple


@dataclass_json
@dataclasses.dataclass
class EnterpriseAdminCreateOrgRequestBody:
    admin: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    login: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('login') }})
    profile_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile_name') }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateOrgRequest:
    request: Optional[EnterpriseAdminCreateOrgRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EnterpriseAdminCreateOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_simple: Optional[shared_organization_simple.OrganizationSimple] = dataclasses.field(default=None)
    
