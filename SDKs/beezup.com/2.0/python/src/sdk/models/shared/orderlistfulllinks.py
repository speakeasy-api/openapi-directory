import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_clearmerchantorderinfolistlink as shared_links_clearmerchantorderinfolistlink
from ..shared import links_exportorderslink as shared_links_exportorderslink
from ..shared import links_harvestalllink as shared_links_harvestalllink
from ..shared import links_getorderlistfulllink as shared_links_getorderlistfulllink
from ..shared import links_setmerchantorderinfolistlink as shared_links_setmerchantorderinfolistlink
from ..shared import links_getmarketplaceaccountssynchronizationlink as shared_links_getmarketplaceaccountssynchronizationlink


@dataclass_json
@dataclasses.dataclass
class OrderListFullLinks:
    r"""OrderListFullLinks
    The list of actions you can do from the order list response
    """
    
    clear_merchant_infos: shared_links_clearmerchantorderinfolistlink.LinksClearMerchantOrderInfoListLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearMerchantInfos') }})
    export: shared_links_exportorderslink.LinksExportOrdersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('export') }})
    harvest: shared_links_harvestalllink.LinksHarvestAllLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('harvest') }})
    self: shared_links_getorderlistfulllink.LinksGetOrderListFullLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    set_merchant_infos: shared_links_setmerchantorderinfolistlink.LinksSetMerchantOrderInfoListLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setMerchantInfos') }})
    status: shared_links_getmarketplaceaccountssynchronizationlink.LinksGetMarketplaceAccountsSynchronizationLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
