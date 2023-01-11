import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GetIdentityPoolRolesInput:
    r"""GetIdentityPoolRolesInput
    Input to the <code>GetIdentityPoolRoles</code> action.
    """
    
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    
