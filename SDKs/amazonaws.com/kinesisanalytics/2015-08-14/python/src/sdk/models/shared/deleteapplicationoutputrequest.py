import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteApplicationOutputRequest:
    r"""DeleteApplicationOutputRequest
    <p/>
    """
    
    application_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationName') }})
    current_application_version_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentApplicationVersionId') }})
    output_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputId') }})
    
