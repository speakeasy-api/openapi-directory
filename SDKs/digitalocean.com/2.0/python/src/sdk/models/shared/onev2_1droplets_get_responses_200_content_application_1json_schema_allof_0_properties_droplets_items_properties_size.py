import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesSize:
    available: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('available') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disk: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('disk') }})
    memory: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('memory') }})
    price_hourly: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_hourly') }})
    price_monthly: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_monthly') }})
    regions: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    slug: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    transfer: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transfer') }})
    vcpus: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vcpus') }})
    
