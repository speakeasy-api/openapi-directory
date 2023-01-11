import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lightsaildistribution as shared_lightsaildistribution
from ..shared import operation as shared_operation


@dataclass_json
@dataclasses.dataclass
class CreateDistributionResult:
    distribution: Optional[shared_lightsaildistribution.LightsailDistribution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    operation: Optional[shared_operation.Operation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operation') }})
    
