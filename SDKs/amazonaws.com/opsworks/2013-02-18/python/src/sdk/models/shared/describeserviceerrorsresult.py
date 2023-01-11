import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import serviceerror as shared_serviceerror


@dataclass_json
@dataclasses.dataclass
class DescribeServiceErrorsResult:
    r"""DescribeServiceErrorsResult
    Contains the response to a <code>DescribeServiceErrors</code> request.
    """
    
    service_errors: Optional[list[shared_serviceerror.ServiceError]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ServiceErrors') }})
    
