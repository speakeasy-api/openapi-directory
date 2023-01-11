import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteIdentityPoolInput:
    r"""DeleteIdentityPoolInput
    Input to the DeleteIdentityPool action.
    """
    
    identity_pool_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityPoolId') }})
    
