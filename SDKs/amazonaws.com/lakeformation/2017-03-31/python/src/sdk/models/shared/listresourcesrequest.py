import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filtercondition as shared_filtercondition


@dataclass_json
@dataclasses.dataclass
class ListResourcesRequest:
    filter_condition_list: Optional[list[shared_filtercondition.FilterCondition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterConditionList') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
