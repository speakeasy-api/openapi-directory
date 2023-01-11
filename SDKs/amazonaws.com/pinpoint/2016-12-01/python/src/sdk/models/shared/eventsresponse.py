import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import itemresponse as shared_itemresponse


@dataclass_json
@dataclasses.dataclass
class EventsResponse:
    r"""EventsResponse
    Provides information about endpoints and the events that they're associated with.
    """
    
    results: Optional[dict[str, shared_itemresponse.ItemResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Results') }})
    
