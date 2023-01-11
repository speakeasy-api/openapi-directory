import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportbyproductlinks as shared_reportbyproductlinks
from ..shared import beezup_common_productbasicinfo as shared_beezup_common_productbasicinfo


@dataclass_json
@dataclasses.dataclass
class ReportByProduct:
    channel_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelCount') }})
    click_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickCount') }})
    cost: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    enabled_on_channel_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledOnChannelCount') }})
    links: shared_reportbyproductlinks.ReportByProductLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    order_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCount') }})
    performance_indicator: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicator') }})
    product: shared_beezup_common_productbasicinfo.BeezUpCommonProductBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product') }})
    sold_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldProductCount') }})
    total_sales: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSales') }})
    margin: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margin') }})
    roi: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roi') }})
    
