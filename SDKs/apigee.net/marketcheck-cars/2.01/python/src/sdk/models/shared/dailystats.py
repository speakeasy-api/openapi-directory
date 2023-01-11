import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dailystatsnestedjson as shared_dailystatsnestedjson


@dataclass_json
@dataclasses.dataclass
class DailyStats:
    dom: Optional[shared_dailystatsnestedjson.DailyStatsNestedJSON] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom') }})
    miles_stats: Optional[shared_dailystatsnestedjson.DailyStatsNestedJSON] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_stats') }})
    price_stats: Optional[shared_dailystatsnestedjson.DailyStatsNestedJSON] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_stats') }})
    units_for_sale: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units_for_sale') }})
    
