import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identityusage as shared_identityusage


@dataclass_json
@dataclasses.dataclass
class DescribeIdentityUsageResponse:
    r"""DescribeIdentityUsageResponse
    The response to a successful DescribeIdentityUsage request.
    """
    
    identity_usage: Optional[shared_identityusage.IdentityUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityUsage') }})
    
