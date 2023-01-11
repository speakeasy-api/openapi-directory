import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetUploadRequest:
    r"""GetUploadRequest
    Represents a request to the get upload operation.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
