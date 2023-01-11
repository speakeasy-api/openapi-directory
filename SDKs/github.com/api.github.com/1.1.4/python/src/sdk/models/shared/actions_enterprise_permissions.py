import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed_actions_enum as shared_allowed_actions_enum
from ..shared import enabled_organizations_enum as shared_enabled_organizations_enum


@dataclass_json
@dataclasses.dataclass
class ActionsEnterprisePermissions:
    allowed_actions: shared_allowed_actions_enum.AllowedActionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    enabled_organizations: shared_enabled_organizations_enum.EnabledOrganizationsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled_organizations') }})
    selected_actions_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_actions_url') }})
    selected_organizations_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_organizations_url') }})
    
