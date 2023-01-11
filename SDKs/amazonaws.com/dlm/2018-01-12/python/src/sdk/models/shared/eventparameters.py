import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventtypevalues_enum as shared_eventtypevalues_enum


@dataclass_json
@dataclasses.dataclass
class EventParameters:
    r"""EventParameters
    Specifies an event that triggers an event-based policy.
    """
    
    description_regex: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DescriptionRegex') }})
    event_type: shared_eventtypevalues_enum.EventTypeValuesEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventType') }})
    snapshot_owner: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotOwner') }})
    
