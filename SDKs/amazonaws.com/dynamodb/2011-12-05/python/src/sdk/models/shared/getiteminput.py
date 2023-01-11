import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import key as shared_key


@dataclass_json
@dataclasses.dataclass
class GetItemInput:
    key: shared_key.Key = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    attributes_to_get: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToGet') }})
    consistent_read: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistentRead') }})
    
