import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliedpromotion as shared_appliedpromotion
from ..shared import deliverycost as shared_deliverycost
from ..shared import amount as shared_amount
from ..shared import ebaycollectandremittax as shared_ebaycollectandremittax
from ..shared import giftdetails as shared_giftdetails
from ..shared import itemlocation as shared_itemlocation
from ..shared import lineitemfulfillmentinstructions as shared_lineitemfulfillmentinstructions
from ..shared import lineitemproperties as shared_lineitemproperties
from ..shared import lineitemrefund as shared_lineitemrefund
from ..shared import tax as shared_tax


@dataclass_json
@dataclasses.dataclass
class LineItem:
    r"""LineItem
    This type contains the details of each line item in an order.
    """
    
    applied_promotions: Optional[list[shared_appliedpromotion.AppliedPromotion]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appliedPromotions') }})
    delivery_cost: Optional[shared_deliverycost.DeliveryCost] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCost') }})
    discounted_line_item_cost: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discountedLineItemCost') }})
    ebay_collect_and_remit_taxes: Optional[list[shared_ebaycollectandremittax.EbayCollectAndRemitTax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ebayCollectAndRemitTaxes') }})
    gift_details: Optional[shared_giftdetails.GiftDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('giftDetails') }})
    item_location: Optional[shared_itemlocation.ItemLocation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemLocation') }})
    legacy_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyItemId') }})
    legacy_variation_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyVariationId') }})
    line_item_cost: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemCost') }})
    line_item_fulfillment_instructions: Optional[shared_lineitemfulfillmentinstructions.LineItemFulfillmentInstructions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemFulfillmentInstructions') }})
    line_item_fulfillment_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemFulfillmentStatus') }})
    line_item_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItemId') }})
    listing_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listingMarketplaceId') }})
    properties: Optional[shared_lineitemproperties.LineItemProperties] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properties') }})
    purchase_marketplace_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseMarketplaceId') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    refunds: Optional[list[shared_lineitemrefund.LineItemRefund]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    sold_format: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soldFormat') }})
    taxes: Optional[list[shared_tax.Tax]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total: Optional[shared_amount.Amount] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
