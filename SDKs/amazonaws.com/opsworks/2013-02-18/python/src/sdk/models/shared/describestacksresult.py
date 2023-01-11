import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stack as shared_stack


@dataclass_json
@dataclasses.dataclass
class DescribeStacksResult:
    r"""DescribeStacksResult
    Contains the response to a <code>DescribeStacks</code> request.
    """
    
    stacks: Optional[list[shared_stack.Stack]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Stacks') }})
    
