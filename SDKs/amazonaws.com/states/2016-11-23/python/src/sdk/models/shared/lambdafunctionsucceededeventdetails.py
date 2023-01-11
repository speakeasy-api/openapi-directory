import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import historyeventexecutiondatadetails as shared_historyeventexecutiondatadetails


@dataclass_json
@dataclasses.dataclass
class LambdaFunctionSucceededEventDetails:
    r"""LambdaFunctionSucceededEventDetails
    Contains details about a lambda function that successfully terminated during an execution.
    """
    
    output: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('output') }})
    output_details: Optional[shared_historyeventexecutiondatadetails.HistoryEventExecutionDataDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputDetails') }})
    
