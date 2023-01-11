import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetDeviceRequest:
    r"""GetDeviceRequest
    Represents a request to the get device request.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
