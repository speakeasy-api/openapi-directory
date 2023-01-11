import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateAliasRequest:
    r"""CreateAliasRequest
    Contains the inputs for the <a>CreateAlias</a> operation.
    """
    
    alias: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alias') }})
    directory_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DirectoryId') }})
    
