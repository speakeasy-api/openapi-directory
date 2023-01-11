import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ModelYearDistEntry:
    brand_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    percent_of_market: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfMarket') }})
    year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
