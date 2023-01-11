import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SimilarSalePriceData:
    days_back: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysBack') }})
    mile_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mileCount') }})
    miles_avg: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milesAvg') }})
    miles_std_dev: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('milesStdDev') }})
    new_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newCount') }})
    new_sale_avg: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSaleAvg') }})
    new_sale_std_dev: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newSaleStdDev') }})
    used_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedCount') }})
    used_sale_avg: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedSaleAvg') }})
    used_sale_std_dev: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedSaleStdDev') }})
    
