import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import containerservicepower as shared_containerservicepower


@dataclass_json
@dataclasses.dataclass
class GetContainerServicePowersResult:
    powers: Optional[list[shared_containerservicepower.ContainerServicePower]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powers') }})
    
