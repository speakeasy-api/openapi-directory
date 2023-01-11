import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class OrderItem:
    r"""OrderItem
    Describe an order item. All properties with the prefix orderItem_ are translated in the list of values /user/lov/OrderMetaInfoOrderItems
    """
    
    beez_up_order_item_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderItemId') }})
    order_item_order_item_type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_OrderItemType') }})
    order_item_beez_up_store_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_BeezUPStoreId') }})
    order_item_condition: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_Condition') }})
    order_item_image_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_ImageUrl') }})
    order_item_item_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_ItemPrice') }})
    order_item_item_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_ItemTax') }})
    order_item_market_place_product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MarketPlaceProductId') }})
    order_item_marketplace_image_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MarketplaceImageUri') }})
    order_item_marketplace_product_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MarketplaceProductUri') }})
    order_item_merchant_imported_product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MerchantImportedProductId') }})
    order_item_merchant_imported_product_id_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MerchantImportedProductIdColumnName') }})
    order_item_merchant_imported_product_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MerchantImportedProductUrl') }})
    order_item_merchant_product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MerchantProductId') }})
    order_item_merchant_product_id_column_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_MerchantProductIdColumnName') }})
    order_item_quantity: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_Quantity') }})
    order_item_shipping_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_Shipping_Price') }})
    order_item_title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_Title') }})
    order_item_total_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_TotalPrice') }})
    order_item_gtin: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItem_gtin') }})
    
