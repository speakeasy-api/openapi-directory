import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbycategorylinks as shared_reportbycategorylinks


@dataclass_json
@dataclasses.dataclass
class ReportByCategory:
    all_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allProductCount') }})
    catalog_category_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogCategoryId') }})
    catalog_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogProductCount') }})
    click_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickCount') }})
    cost: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    enabled_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledProductCount') }})
    links: shared_reportbycategorylinks.ReportByCategoryLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    order_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCount') }})
    performance_indicator: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicator') }})
    sold_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldProductCount') }})
    total_sales: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSales') }})
    catalog_category_path: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogCategoryPath') }})
    margin: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margin') }})
    roi: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roi') }})
    
