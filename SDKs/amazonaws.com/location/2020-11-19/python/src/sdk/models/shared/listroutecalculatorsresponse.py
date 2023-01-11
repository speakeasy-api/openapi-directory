import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listroutecalculatorsresponseentry as shared_listroutecalculatorsresponseentry


@dataclass_json
@dataclasses.dataclass
class ListRouteCalculatorsResponse:
    entries: list[shared_listroutecalculatorsresponseentry.ListRouteCalculatorsResponseEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
