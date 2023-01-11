import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thinggroupdocument as shared_thinggroupdocument
from ..shared import thingdocument as shared_thingdocument


@dataclass_json
@dataclasses.dataclass
class SearchIndexResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    thing_groups: Optional[list[shared_thinggroupdocument.ThingGroupDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroups') }})
    things: Optional[list[shared_thingdocument.ThingDocument]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('things') }})
    
