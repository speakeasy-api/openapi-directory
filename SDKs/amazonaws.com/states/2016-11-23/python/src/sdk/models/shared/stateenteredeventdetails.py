import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historyeventexecutiondatadetails as shared_historyeventexecutiondatadetails


@dataclass_json
@dataclasses.dataclass
class StateEnteredEventDetails:
    r"""StateEnteredEventDetails
    Contains details about a state entered during an execution.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    input: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    input_details: Optional[shared_historyeventexecutiondatadetails.HistoryEventExecutionDataDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputDetails') }})
    
