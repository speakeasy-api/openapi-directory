import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import crossregioncopyaction as shared_crossregioncopyaction


@dataclass_json
@dataclasses.dataclass
class Action:
    r"""Action
    Specifies an action for an event-based policy.
    """
    
    cross_region_copy: list[shared_crossregioncopyaction.CrossRegionCopyAction] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CrossRegionCopy') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
