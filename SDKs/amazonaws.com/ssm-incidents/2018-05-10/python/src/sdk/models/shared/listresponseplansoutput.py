import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import responseplansummary as shared_responseplansummary


@dataclass_json
@dataclasses.dataclass
class ListResponsePlansOutput:
    response_plan_summaries: list[shared_responseplansummary.ResponsePlanSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responsePlanSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
