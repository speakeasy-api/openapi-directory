import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dedicatedip as shared_dedicatedip


@dataclass_json
@dataclasses.dataclass
class GetDedicatedIpsResponse:
    r"""GetDedicatedIpsResponse
    Information about the dedicated IP addresses that are associated with your AWS account.
    """
    
    dedicated_ips: Optional[list[shared_dedicatedip.DedicatedIP]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedIps') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
