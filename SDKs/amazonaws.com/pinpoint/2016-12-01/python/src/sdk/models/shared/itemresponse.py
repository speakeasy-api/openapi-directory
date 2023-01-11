import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointitemresponse as shared_endpointitemresponse
from ..shared import eventitemresponse as shared_eventitemresponse


@dataclass_json
@dataclasses.dataclass
class ItemResponse:
    endpoint_item_response: Optional[shared_endpointitemresponse.EndpointItemResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointItemResponse') }})
    events_item_response: Optional[dict[str, shared_eventitemresponse.EventItemResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventsItemResponse') }})
    
