import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import canary as shared_canary


@dataclass_json
@dataclasses.dataclass
class DescribeCanariesResponse:
    canaries: Optional[list[shared_canary.Canary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Canaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
