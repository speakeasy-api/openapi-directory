import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import output as shared_output


@dataclass_json
@dataclasses.dataclass
class AddApplicationOutputRequest:
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    output: shared_output.Output = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Output') }})
    
