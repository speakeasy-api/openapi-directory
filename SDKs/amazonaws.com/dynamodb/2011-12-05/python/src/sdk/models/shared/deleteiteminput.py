import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import expectedattributevalue as shared_expectedattributevalue
from ..shared import key as shared_key
from ..shared import returnvalue_enum as shared_returnvalue_enum


@dataclass_json
@dataclasses.dataclass
class DeleteItemInput:
    key: shared_key.Key = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    expected: Optional[dict[str, shared_expectedattributevalue.ExpectedAttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expected') }})
    return_values: Optional[shared_returnvalue_enum.ReturnValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnValues') }})
    
