import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevalue as shared_attributevalue
from ..shared import key as shared_key


@dataclass_json
@dataclasses.dataclass
class QueryOutput:
    consumed_capacity_units: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumedCapacityUnits') }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    items: Optional[list[dict[str, shared_attributevalue.AttributeValue]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    last_evaluated_key: Optional[shared_key.Key] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastEvaluatedKey') }})
    
