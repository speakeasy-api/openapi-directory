import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import actiontypeid as shared_actiontypeid


@dataclass_json
@dataclasses.dataclass
class PollForJobsInput:
    r"""PollForJobsInput
    Represents the input of a <code>PollForJobs</code> action.
    """
    
    action_type_id: shared_actiontypeid.ActionTypeID = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionTypeId') }})
    max_batch_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBatchSize') }})
    query_param: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParam') }})
    
