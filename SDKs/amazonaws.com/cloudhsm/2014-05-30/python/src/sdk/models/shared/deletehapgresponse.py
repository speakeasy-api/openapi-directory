import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteHapgResponse:
    r"""DeleteHapgResponse
    Contains the output of the <a>DeleteHapg</a> action.
    """
    
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
