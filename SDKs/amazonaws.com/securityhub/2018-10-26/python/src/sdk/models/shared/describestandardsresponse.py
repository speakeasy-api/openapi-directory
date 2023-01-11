import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standard as shared_standard


@dataclass_json
@dataclasses.dataclass
class DescribeStandardsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    standards: Optional[list[shared_standard.Standard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Standards') }})
    
