import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class RegisterJobDefinitionResponse:
    job_definition_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionArn') }})
    job_definition_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobDefinitionName') }})
    revision: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revision') }})
    
