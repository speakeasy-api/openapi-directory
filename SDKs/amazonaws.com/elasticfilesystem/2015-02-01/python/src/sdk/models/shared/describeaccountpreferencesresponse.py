import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceidpreference as shared_resourceidpreference


@dataclass_json
@dataclasses.dataclass
class DescribeAccountPreferencesResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_id_preference: Optional[shared_resourceidpreference.ResourceIDPreference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceIdPreference') }})
    
