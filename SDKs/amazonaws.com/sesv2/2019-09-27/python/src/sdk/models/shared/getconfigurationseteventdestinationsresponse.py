import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventdestination as shared_eventdestination


@dataclass_json
@dataclasses.dataclass
class GetConfigurationSetEventDestinationsResponse:
    r"""GetConfigurationSetEventDestinationsResponse
    Information about an event destination for a configuration set.
    """
    
    event_destinations: Optional[list[shared_eventdestination.EventDestination]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventDestinations') }})
    
