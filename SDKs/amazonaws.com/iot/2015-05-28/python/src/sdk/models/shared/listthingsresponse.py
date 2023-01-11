import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thingattribute as shared_thingattribute


@dataclass_json
@dataclasses.dataclass
class ListThingsResponse:
    r"""ListThingsResponse
    The output from the ListThings operation.
    """
    
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    things: Optional[list[shared_thingattribute.ThingAttribute]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('things') }})
    
