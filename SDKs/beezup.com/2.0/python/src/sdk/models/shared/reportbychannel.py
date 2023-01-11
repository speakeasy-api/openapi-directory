import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_channelbasicinfo as shared_beezup_common_channelbasicinfo
from ..shared import reportbychannellinks as shared_reportbychannellinks


@dataclass_json
@dataclasses.dataclass
class ReportByChannel:
    catalog_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogProductCount') }})
    channel: shared_beezup_common_channelbasicinfo.BeezUpCommonChannelBasicInfo = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    click_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickCount') }})
    cost: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    enabled_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabledProductCount') }})
    links: shared_reportbychannellinks.ReportByChannelLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    order_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCount') }})
    performance_indicator: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('performanceIndicator') }})
    sold_product_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldProductCount') }})
    total_sales: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSales') }})
    margin: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('margin') }})
    roi: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roi') }})
    
