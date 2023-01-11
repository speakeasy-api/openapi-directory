import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stacksummary as shared_stacksummary


@dataclass_json
@dataclasses.dataclass
class DescribeStackSummaryResult:
    r"""DescribeStackSummaryResult
    Contains the response to a <code>DescribeStackSummary</code> request.
    """
    
    stack_summary: Optional[shared_stacksummary.StackSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackSummary') }})
    
