import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import publicendpoint as shared_publicendpoint
from ..shared import event as shared_event


@dataclass_json
@dataclasses.dataclass
class EventsBatch:
    endpoint: Optional[shared_publicendpoint.PublicEndpoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    events: Optional[dict[str, shared_event.Event]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Events') }})
    
