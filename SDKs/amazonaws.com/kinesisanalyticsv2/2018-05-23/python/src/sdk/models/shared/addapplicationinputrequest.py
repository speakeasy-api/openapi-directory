import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import input as shared_input


@dataclass_json
@dataclasses.dataclass
class AddApplicationInputRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    input: shared_input.Input = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Input') }})
    
