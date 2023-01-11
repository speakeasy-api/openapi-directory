import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trainingmode_enum as shared_trainingmode_enum


@dataclass_json
@dataclasses.dataclass
class CreateSolutionVersionRequest:
    solution_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('solutionArn') }})
    training_mode: Optional[shared_trainingmode_enum.TrainingModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trainingMode') }})
    
