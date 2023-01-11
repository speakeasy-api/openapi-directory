import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import region as shared_region


@dataclass_json
@dataclasses.dataclass
class GetRegionsResult:
    regions: Optional[list[shared_region.Region]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    
