import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributevalueupdate as shared_attributevalueupdate
from ..shared import expectedattributevalue as shared_expectedattributevalue
from ..shared import key as shared_key
from ..shared import returnvalue_enum as shared_returnvalue_enum


@dataclass_json
@dataclasses.dataclass
class UpdateItemInput:
    attribute_updates: dict[str, shared_attributevalueupdate.AttributeValueUpdate] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeUpdates') }})
    key: shared_key.Key = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    table_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    expected: Optional[dict[str, shared_expectedattributevalue.ExpectedAttributeValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expected') }})
    return_values: Optional[shared_returnvalue_enum.ReturnValueEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReturnValues') }})
    
