import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import changesetsummarylistitem as shared_changesetsummarylistitem


@dataclass_json
@dataclasses.dataclass
class ListChangeSetsResponse:
    change_set_summary_list: Optional[list[shared_changesetsummarylistitem.ChangeSetSummaryListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ChangeSetSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
