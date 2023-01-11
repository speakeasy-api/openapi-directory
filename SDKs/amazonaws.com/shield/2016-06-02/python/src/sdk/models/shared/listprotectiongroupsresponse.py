import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protectiongroup as shared_protectiongroup


@dataclass_json
@dataclasses.dataclass
class ListProtectionGroupsResponse:
    protection_groups: list[shared_protectiongroup.ProtectionGroup] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtectionGroups') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
