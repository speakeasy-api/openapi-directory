import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listmapsresponseentry as shared_listmapsresponseentry


@dataclass_json
@dataclasses.dataclass
class ListMapsResponse:
    entries: list[shared_listmapsresponseentry.ListMapsResponseEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
