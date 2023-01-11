import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import observation as shared_observation


@dataclass_json
@dataclasses.dataclass
class DescribeObservationResponse:
    observation: Optional[shared_observation.Observation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Observation') }})
    
