import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import organizationroles_enum as shared_organizationroles_enum


@dataclass_json
@dataclasses.dataclass
class OrganizationInvitationCreation:
    r"""OrganizationInvitationCreation
    The parameters to create an organization invitation
    """
    
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    organization_role: Optional[shared_organizationroles_enum.OrganizationRolesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationRole') }})
    
