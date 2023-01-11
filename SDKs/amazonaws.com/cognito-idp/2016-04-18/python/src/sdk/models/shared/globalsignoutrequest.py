import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GlobalSignOutRequest:
    r"""GlobalSignOutRequest
    Represents the request to sign out all devices.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    
