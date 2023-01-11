import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateHapgResponse:
    r"""CreateHapgResponse
    Contains the output of the <a>CreateHAPartitionGroup</a> action.
    """
    
    hapg_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HapgArn') }})
    
