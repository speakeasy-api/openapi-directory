import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class HpoResourceConfig:
    r"""HpoResourceConfig
    Describes the resource configuration for hyperparameter optimization (HPO).
    """
    
    max_number_of_training_jobs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfTrainingJobs') }})
    max_parallel_training_jobs: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxParallelTrainingJobs') }})
    
