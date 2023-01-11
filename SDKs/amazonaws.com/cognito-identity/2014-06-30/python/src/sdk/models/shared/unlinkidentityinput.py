import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UnlinkIdentityInput:
    r"""UnlinkIdentityInput
    Input to the UnlinkIdentity action.
    """
    
    identity_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityId') }})
    logins: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Logins') }})
    logins_to_remove: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LoginsToRemove') }})
    
