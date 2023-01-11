import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trainingdata as shared_trainingdata
from ..shared import validationdata as shared_validationdata


@dataclass_json
@dataclasses.dataclass
class TrainingDataResult:
    r"""TrainingDataResult
    Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
    """
    
    input: Optional[shared_trainingdata.TrainingData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    output: Optional[shared_trainingdata.TrainingData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    validation: Optional[shared_validationdata.ValidationData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Validation') }})
    
