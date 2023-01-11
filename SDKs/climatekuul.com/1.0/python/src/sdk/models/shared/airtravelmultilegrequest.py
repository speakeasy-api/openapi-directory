import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leg1 as shared_leg1


@dataclass_json
@dataclasses.dataclass
class AirtravelMultilegRequest:
    api_key_l1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey_l1') }})
    api_key_l2: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKey_l2') }})
    contact_email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactEmail') }})
    contact_first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactFirstName') }})
    contact_last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactLastName') }})
    leg1: shared_leg1.Leg1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg1') }})
    leg2: shared_leg1.Leg1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg2') }})
    leg3: shared_leg1.Leg1 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leg3') }})
    legs_count: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('legs_count') }})
    number_of_passengers: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_passengers') }})
    travel_mode: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('travel_mode') }})
    
