import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_clearmerchantorderinfolink as shared_links_clearmerchantorderinfolink
from ..shared import links_harvestorderlink as shared_links_harvestorderlink
from ..shared import links_getorderhistorylink as shared_links_getorderhistorylink
from ..shared import links_getorderlink as shared_links_getorderlink
from ..shared import links_setmerchantorderinfolink as shared_links_setmerchantorderinfolink


@dataclass_json
@dataclasses.dataclass
class OrderLinks:
    clear_merchant_info: shared_links_clearmerchantorderinfolink.LinksClearMerchantOrderInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearMerchantInfo') }})
    harvest: shared_links_harvestorderlink.LinksHarvestOrderLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('harvest') }})
    history: shared_links_getorderhistorylink.LinksGetOrderHistoryLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('history') }})
    self: shared_links_getorderlink.LinksGetOrderLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    set_merchant_info: shared_links_setmerchantorderinfolink.LinksSetMerchantOrderInfoLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setMerchantInfo') }})
    
