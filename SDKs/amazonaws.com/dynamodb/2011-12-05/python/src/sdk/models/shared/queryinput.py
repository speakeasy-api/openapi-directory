import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import key as shared_key
from ..shared import attributevalue as shared_attributevalue
from ..shared import condition as shared_condition


@dataclass_json
@dataclasses.dataclass
class QueryInput:
    hash_key_value: shared_attributevalue.AttributeValue = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('HashKeyValue') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    attributes_to_get: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributesToGet') }})
    consistent_read: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsistentRead') }})
    count: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    exclusive_start_key: Optional[shared_key.Key] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExclusiveStartKey') }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    range_key_condition: Optional[shared_condition.Condition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeKeyCondition') }})
    scan_index_forward: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScanIndexForward') }})
    
