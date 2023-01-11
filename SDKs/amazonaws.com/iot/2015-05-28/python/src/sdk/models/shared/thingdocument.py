import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import thingconnectivity as shared_thingconnectivity


@dataclass_json
@dataclasses.dataclass
class ThingDocument:
    r"""ThingDocument
    The thing search index document.
    """
    
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    connectivity: Optional[shared_thingconnectivity.ThingConnectivity] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connectivity') }})
    shadow: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadow') }})
    thing_group_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingGroupNames') }})
    thing_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingId') }})
    thing_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingName') }})
    thing_type_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thingTypeName') }})
    
