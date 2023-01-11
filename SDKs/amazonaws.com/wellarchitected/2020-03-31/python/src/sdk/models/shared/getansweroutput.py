import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import answer as shared_answer


@dataclass_json
@dataclasses.dataclass
class GetAnswerOutput:
    r"""GetAnswerOutput
    Output of a get answer call.
    """
    
    answer: Optional[shared_answer.Answer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Answer') }})
    lens_alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LensAlias') }})
    milestone_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MilestoneNumber') }})
    workload_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WorkloadId') }})
    
