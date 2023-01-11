import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AwsEcsServicePlacementStrategiesDetails:
    r"""AwsEcsServicePlacementStrategiesDetails
    A placement strategy that determines how to place the tasks for the service.
    """
    
    field: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Field') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
