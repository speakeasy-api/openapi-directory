import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import component as shared_component


@dataclass_json
@dataclasses.dataclass
class ListComponentsResponse:
    components: Optional[list[shared_component.Component]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('components') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
