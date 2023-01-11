import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import component as shared_component


@dataclass_json
@dataclasses.dataclass
class GetComponentResponse:
    component: Optional[shared_component.Component] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('component') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
