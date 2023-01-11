import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import componentsummary as shared_componentsummary


@dataclass_json
@dataclasses.dataclass
class ListComponentBuildVersionsResponse:
    component_summary_list: Optional[list[shared_componentsummary.ComponentSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentSummaryList') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
