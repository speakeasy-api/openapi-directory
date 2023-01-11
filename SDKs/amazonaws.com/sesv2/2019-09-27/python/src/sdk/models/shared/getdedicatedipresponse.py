import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dedicatedip as shared_dedicatedip


@dataclass_json
@dataclasses.dataclass
class GetDedicatedIPResponse:
    r"""GetDedicatedIPResponse
    Information about a dedicated IP address.
    """
    
    dedicated_ip: Optional[shared_dedicatedip.DedicatedIP] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DedicatedIp') }})
    
