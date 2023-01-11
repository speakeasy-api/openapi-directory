import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetRemoteAccessSessionRequest:
    r"""GetRemoteAccessSessionRequest
    Represents the request to get information about the specified remote access session.
    """
    
    arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('arn') }})
    
