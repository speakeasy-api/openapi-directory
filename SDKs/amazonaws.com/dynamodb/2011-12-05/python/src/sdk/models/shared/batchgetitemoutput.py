import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import batchresponse as shared_batchresponse
from ..shared import keysandattributes as shared_keysandattributes


@dataclass_json
@dataclasses.dataclass
class BatchGetItemOutput:
    responses: Optional[dict[str, shared_batchresponse.BatchResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Responses') }})
    unprocessed_keys: Optional[dict[str, shared_keysandattributes.KeysAndAttributes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnprocessedKeys') }})
    
