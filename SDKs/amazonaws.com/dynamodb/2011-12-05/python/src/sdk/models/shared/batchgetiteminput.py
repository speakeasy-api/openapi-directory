import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import keysandattributes as shared_keysandattributes


@dataclass_json
@dataclasses.dataclass
class BatchGetItemInput:
    request_items: dict[str, shared_keysandattributes.KeysAndAttributes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestItems') }})
    
