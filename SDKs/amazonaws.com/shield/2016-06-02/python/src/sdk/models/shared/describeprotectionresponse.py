import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import protection as shared_protection


@dataclass_json
@dataclasses.dataclass
class DescribeProtectionResponse:
    protection: Optional[shared_protection.Protection] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protection') }})
    
