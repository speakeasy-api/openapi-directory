import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import key as shared_key


@dataclass_json
@dataclasses.dataclass
class DeleteRequest:
    r"""DeleteRequest
    A container for a Delete BatchWrite request
    """
    
    key: shared_key.Key = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    
