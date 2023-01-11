import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routeref as shared_routeref


@dataclass_json
@dataclasses.dataclass
class ListRoutesOutput:
    routes: list[shared_routeref.RouteRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
