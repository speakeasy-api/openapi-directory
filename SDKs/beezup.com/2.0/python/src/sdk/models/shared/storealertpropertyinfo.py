import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StoreAlertPropertyInfo:
    property_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    property_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyName') }})
    property_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValue') }})
    property_validation_expression: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValidationExpression') }})
    
