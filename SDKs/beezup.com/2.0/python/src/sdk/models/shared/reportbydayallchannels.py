import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ReportByDayAllChannels:
    click_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickCount') }})
    cost: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    margin: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('margin') }})
    order_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCount') }})
    performance_indicator: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicator') }})
    roi: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roi') }})
    sold_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldProductCount') }})
    total_sales: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSales') }})
    
