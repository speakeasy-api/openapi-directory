import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsourcemappingconfiguration as shared_eventsourcemappingconfiguration


@dataclass_json
@dataclasses.dataclass
class ListEventSourceMappingsResponse:
    event_source_mappings: Optional[list[shared_eventsourcemappingconfiguration.EventSourceMappingConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceMappings') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
