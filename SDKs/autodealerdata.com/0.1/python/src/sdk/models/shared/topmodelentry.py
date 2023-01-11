import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TopModelEntry:
    brand_market_share: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandMarketShare') }})
    brand_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandName') }})
    model_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelName') }})
    percent_of_brand_sales: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfBrandSales') }})
    percent_of_top_sales: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentOfTopSales') }})
    
