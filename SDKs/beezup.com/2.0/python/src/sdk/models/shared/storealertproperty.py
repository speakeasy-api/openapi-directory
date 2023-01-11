import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class StoreAlertProperty:
    property_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyId') }})
    property_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyValue') }})
    
