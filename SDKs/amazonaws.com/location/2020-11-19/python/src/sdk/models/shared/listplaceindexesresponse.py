import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listplaceindexesresponseentry as shared_listplaceindexesresponseentry


@dataclass_json
@dataclasses.dataclass
class ListPlaceIndexesResponse:
    entries: list[shared_listplaceindexesresponseentry.ListPlaceIndexesResponseEntry] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
