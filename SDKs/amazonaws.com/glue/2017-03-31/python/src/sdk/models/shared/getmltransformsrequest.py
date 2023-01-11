import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import transformfiltercriteria as shared_transformfiltercriteria
from ..shared import transformsortcriteria as shared_transformsortcriteria


@dataclass_json
@dataclasses.dataclass
class GetMlTransformsRequest:
    filter: Optional[shared_transformfiltercriteria.TransformFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Filter') }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    sort: Optional[shared_transformsortcriteria.TransformSortCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sort') }})
    
