import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import humanloopsummary as shared_humanloopsummary


@dataclass_json
@dataclasses.dataclass
class ListHumanLoopsResponse:
    human_loop_summaries: list[shared_humanloopsummary.HumanLoopSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLoopSummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
