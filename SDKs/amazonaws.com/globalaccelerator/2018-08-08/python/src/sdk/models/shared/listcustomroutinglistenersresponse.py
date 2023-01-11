import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customroutinglistener as shared_customroutinglistener


@dataclass_json
@dataclasses.dataclass
class ListCustomRoutingListenersResponse:
    listeners: Optional[list[shared_customroutinglistener.CustomRoutingListener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Listeners') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
