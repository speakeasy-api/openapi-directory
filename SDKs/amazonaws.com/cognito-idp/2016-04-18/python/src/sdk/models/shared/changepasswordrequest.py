import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ChangePasswordRequest:
    r"""ChangePasswordRequest
    Represents the request to change a user password.
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccessToken') }})
    previous_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreviousPassword') }})
    proposed_password: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProposedPassword') }})
    
