import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import links_getautomatictransitionslink as shared_links_getautomatictransitionslink
from ..shared import links_clearmerchantorderinfolistlink as shared_links_clearmerchantorderinfolistlink
from ..shared import links_exportorderslink as shared_links_exportorderslink
from ..shared import links_getorderexportationslink as shared_links_getorderexportationslink
from ..shared import links_harvestalllink as shared_links_harvestalllink
from ..shared import links_getorderlistlightlink as shared_links_getorderlistlightlink
from ..shared import links_getorderlistfulllink as shared_links_getorderlistfulllink
from ..shared import links_getorderindexlink as shared_links_getorderindexlink
from ..shared import links_setmerchantorderinfolistlink as shared_links_setmerchantorderinfolistlink
from ..shared import links_getmarketplaceaccountssynchronizationlink as shared_links_getmarketplaceaccountssynchronizationlink


@dataclass_json
@dataclasses.dataclass
class OrderIndexLinks:
    r"""OrderIndexLinks
    Gives you all entry point operations you can do on this API
    """
    
    auto_transitions: shared_links_getautomatictransitionslink.LinksGetAutomaticTransitionsLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoTransitions') }})
    clear_merchant_infos: shared_links_clearmerchantorderinfolistlink.LinksClearMerchantOrderInfoListLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearMerchantInfos') }})
    export: shared_links_exportorderslink.LinksExportOrdersLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('export') }})
    harvest: shared_links_harvestalllink.LinksHarvestAllLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('harvest') }})
    light_orders: shared_links_getorderlistlightlink.LinksGetOrderListLightLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lightOrders') }})
    orders: shared_links_getorderlistfulllink.LinksGetOrderListFullLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orders') }})
    self: shared_links_getorderindexlink.LinksGetOrderIndexLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    set_merchant_infos: shared_links_setmerchantorderinfolistlink.LinksSetMerchantOrderInfoListLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('setMerchantInfos') }})
    status: shared_links_getmarketplaceaccountssynchronizationlink.LinksGetMarketplaceAccountsSynchronizationLink = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    exportations: Optional[shared_links_getorderexportationslink.LinksGetOrderExportationsLink] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportations') }})
    
