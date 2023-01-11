import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thing as shared_thing


@dataclass_json
@dataclasses.dataclass
class SearchThingsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    things: Optional[list[shared_thing.Thing]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('things') }})
    
