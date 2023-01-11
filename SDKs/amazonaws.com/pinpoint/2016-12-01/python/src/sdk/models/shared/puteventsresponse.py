import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import eventsresponse as shared_eventsresponse


@dataclass_json
@dataclasses.dataclass
class PutEventsResponse:
    events_response: shared_eventsresponse.EventsResponse = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventsResponse') }})
    
