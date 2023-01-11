import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsourceconfiguration as shared_eventsourceconfiguration


@dataclass_json
@dataclasses.dataclass
class ListEventSourcesResponse:
    r"""ListEventSourcesResponse
    Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
    """
    
    event_sources: Optional[list[shared_eventsourceconfiguration.EventSourceConfiguration]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSources') }})
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
