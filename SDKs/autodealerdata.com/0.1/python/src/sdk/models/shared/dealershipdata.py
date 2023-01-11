import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DealershipData:
    address: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    dealer_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dealerName') }})
    ids: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    state: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip_code: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('zipCode') }})
    
