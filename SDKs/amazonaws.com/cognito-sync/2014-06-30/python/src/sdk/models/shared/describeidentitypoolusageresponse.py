import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import identitypoolusage as shared_identitypoolusage


@dataclass_json
@dataclasses.dataclass
class DescribeIdentityPoolUsageResponse:
    r"""DescribeIdentityPoolUsageResponse
    Response to a successful DescribeIdentityPoolUsage request.
    """
    
    identity_pool_usage: Optional[shared_identitypoolusage.IdentityPoolUsage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolUsage') }})
    
