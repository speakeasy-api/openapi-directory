import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conditionalforwarder as shared_conditionalforwarder


@dataclass_json
@dataclasses.dataclass
class DescribeConditionalForwardersResult:
    r"""DescribeConditionalForwardersResult
    The result of a DescribeConditionalForwarder request.
    """
    
    conditional_forwarders: Optional[list[shared_conditionalforwarder.ConditionalForwarder]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConditionalForwarders') }})
    
