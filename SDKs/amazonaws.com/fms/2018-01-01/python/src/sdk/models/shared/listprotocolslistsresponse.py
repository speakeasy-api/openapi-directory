import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protocolslistdatasummary as shared_protocolslistdatasummary


@dataclass_json
@dataclasses.dataclass
class ListProtocolsListsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    protocols_lists: Optional[list[shared_protocolslistdatasummary.ProtocolsListDataSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProtocolsLists') }})
    
