import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import address as shared_address


@dataclass_json
@dataclasses.dataclass
class DescribeAddressResult:
    address: Optional[shared_address.Address] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Address') }})
    
