import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import standardscontrol as shared_standardscontrol


@dataclass_json
@dataclasses.dataclass
class DescribeStandardsControlsResponse:
    controls: Optional[list[shared_standardscontrol.StandardsControl]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Controls') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
