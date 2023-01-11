import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DeleteIdentitiesInput:
    r"""DeleteIdentitiesInput
    Input to the <code>DeleteIdentities</code> action.
    """
    
    identity_ids_to_delete: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IdentityIdsToDelete') }})
    
