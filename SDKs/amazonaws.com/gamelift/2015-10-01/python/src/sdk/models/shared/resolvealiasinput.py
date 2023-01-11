import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ResolveAliasInput:
    r"""ResolveAliasInput
    Represents the input for a request operation.
    """
    
    alias_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AliasId') }})
    
