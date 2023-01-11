import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import experiment as shared_experiment


@dataclass_json
@dataclasses.dataclass
class GetExperimentResponse:
    experiment: Optional[shared_experiment.Experiment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('experiment') }})
    
