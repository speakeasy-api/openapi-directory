import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import findingsfilterlistitem as shared_findingsfilterlistitem


@dataclass_json
@dataclasses.dataclass
class ListFindingsFiltersResponse:
    findings_filter_list_items: Optional[list[shared_findingsfilterlistitem.FindingsFilterListItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingsFilterListItems') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
