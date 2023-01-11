import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import outputconfig as shared_outputconfig
from ..shared import testingdata as shared_testingdata
from ..shared import trainingdata as shared_trainingdata


@dataclass_json
@dataclasses.dataclass
class CreateProjectVersionRequest:
    output_config: shared_outputconfig.OutputConfig = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputConfig') }})
    project_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProjectArn') }})
    testing_data: shared_testingdata.TestingData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TestingData') }})
    training_data: shared_trainingdata.TrainingData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrainingData') }})
    version_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VersionName') }})
    kms_key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    tags: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
