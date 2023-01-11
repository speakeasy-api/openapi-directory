import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import beezup_common_lovlink3 as shared_beezup_common_lovlink3


@dataclass_json
@dataclasses.dataclass
class MarketplaceChannelCatalogLovLinks:
    r"""MarketplaceChannelCatalogLovLinks
    Indicates the List Of Values related to the marketplace
    """
    
    cancelation_reason_code_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelationReasonCodeLOV') }})
    carrier_code_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierCodeLOV') }})
    marketplace_store_property_group_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceStorePropertyGroupLOV') }})
    marketplace_store_property_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceStorePropertyLOV') }})
    refund_reason_code_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundReasonCodeLOV') }})
    shipping_method_lov: Optional[shared_beezup_common_lovlink3.BeezUpCommonLovLink3] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingMethodLOV') }})
    
