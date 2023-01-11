import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import taskrunfiltercriteria as shared_taskrunfiltercriteria
from ..shared import taskrunsortcriteria as shared_taskrunsortcriteria


@dataclass_json
@dataclasses.dataclass
class GetMlTaskRunsRequest:
    transform_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TransformId') }})
    filter: Optional[shared_taskrunfiltercriteria.TaskRunFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort: Optional[shared_taskrunsortcriteria.TaskRunSortCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sort') }})
    
