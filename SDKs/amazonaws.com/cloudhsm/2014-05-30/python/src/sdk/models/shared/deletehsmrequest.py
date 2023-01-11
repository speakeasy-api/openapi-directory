import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteHsmRequest:
    r"""DeleteHsmRequest
    Contains the inputs for the <a>DeleteHsm</a> operation.
    """
    
    hsm_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HsmArn') }})
    
