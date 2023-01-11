import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionTypePermissions:
    r"""ActionTypePermissions
    Details identifying the users with permissions to use the action type.
    """
    
    allowed_accounts: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedAccounts') }})
    
