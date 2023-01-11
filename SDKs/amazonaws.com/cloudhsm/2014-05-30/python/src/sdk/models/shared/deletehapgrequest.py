import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteHapgRequest:
    r"""DeleteHapgRequest
    Contains the inputs for the <a>DeleteHapg</a> action.
    """
    
    hapg_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    
