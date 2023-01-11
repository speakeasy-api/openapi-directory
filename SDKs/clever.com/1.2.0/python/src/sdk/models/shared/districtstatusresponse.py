import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import districtstatus as shared_districtstatus


@dataclass_json
@dataclasses.dataclass
class DistrictStatusResponse:
    data: Optional[shared_districtstatus.DistrictStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
