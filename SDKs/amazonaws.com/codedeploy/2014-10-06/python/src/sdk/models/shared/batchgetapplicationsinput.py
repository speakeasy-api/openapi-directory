import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchGetApplicationsInput:
    r"""BatchGetApplicationsInput
    Represents the input of a <code>BatchGetApplications</code> operation.
    """
    
    application_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicationNames') }})
    
