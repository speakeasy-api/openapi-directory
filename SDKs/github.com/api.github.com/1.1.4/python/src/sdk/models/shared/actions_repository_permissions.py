import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allowed_actions_enum as shared_allowed_actions_enum


@dataclass_json
@dataclasses.dataclass
class ActionsRepositoryPermissions:
    allowed_actions: shared_allowed_actions_enum.AllowedActionsEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_actions') }})
    enabled: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    selected_actions_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selected_actions_url') }})
    
