import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import loa as shared_loa


@dataclass_json
@dataclasses.dataclass
class DescribeConnectionLoaResponse:
    loa: Optional[shared_loa.Loa] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loa') }})
    
