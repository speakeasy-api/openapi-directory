import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Leg1:
    destination_airport_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_airport_code') }})
    origin_airport_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin_airport_code') }})
    travel_class: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('travel_class') }})
    
