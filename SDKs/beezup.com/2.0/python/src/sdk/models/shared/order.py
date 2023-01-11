import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderlinks as shared_orderlinks
from ..shared import orderitem as shared_orderitem
from ..shared import links_changeorderlink as shared_links_changeorderlink


@dataclass_json
@dataclasses.dataclass
class Order:
    r"""Order
    Describe in details all informations related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails.
    """
    
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    beez_up_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderId') }})
    etag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    links: shared_orderlinks.OrderLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    marketplace_business_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceBusinessCode') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    order_items: list[shared_orderitem.OrderItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderItems') }})
    order_last_modification_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_LastModificationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_marketplace_last_modification_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MarketplaceLastModificationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_marketplace_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MarketplaceOrderId') }})
    order_purchase_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_PurchaseUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_status_beez_up_order_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Status_BeezUPOrderStatus') }})
    processing: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing') }})
    transition_links: list[shared_links_changeorderlink.LinksChangeOrderLink] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transitionLinks') }})
    beez_up_order_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderUrl') }})
    order_buyer_address_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressCity') }})
    order_buyer_address_country_iso_code_alpha2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressCountryIsoCodeAlpha2') }})
    order_buyer_address_country_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressCountryName') }})
    order_buyer_address_line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressLine1') }})
    order_buyer_address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressLine2') }})
    order_buyer_address_line3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressLine3') }})
    order_buyer_address_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressPostalCode') }})
    order_buyer_address_state_or_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_AddressStateOrRegion') }})
    order_buyer_civility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_Civility') }})
    order_buyer_company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_CompanyName') }})
    order_buyer_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_Email') }})
    order_buyer_first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_FirstName') }})
    order_buyer_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_Identifier') }})
    order_buyer_last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_LastName') }})
    order_buyer_mobile_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_MobilePhone') }})
    order_buyer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_Name') }})
    order_buyer_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_Phone') }})
    order_comment: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Comment') }})
    order_currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_CurrencyCode') }})
    order_fulfilled_by: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_FulfilledBy') }})
    order_invoice_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Invoice_Number') }})
    order_invoice_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Invoice_Uri') }})
    order_is_business: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_IsBusiness') }})
    order_is_prime: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_IsPrime') }})
    order_market_place_channel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MarketPlaceChannel') }})
    order_merchant_e_commerce_software_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareName') }})
    order_merchant_e_commerce_software_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareVersion') }})
    order_merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantOrderId') }})
    order_order_items_source_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_OrderItemsSourceUri') }})
    order_order_source_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_OrderSourceUri') }})
    order_paying_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_PayingUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_payment_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_PaymentMethod') }})
    order_shipping_address_city: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressCity') }})
    order_shipping_address_country_iso_code_alpha2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressCountryIsoCodeAlpha2') }})
    order_shipping_address_country_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressCountryName') }})
    order_shipping_address_line1: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressLine1') }})
    order_shipping_address_line2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressLine2') }})
    order_shipping_address_line3: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressLine3') }})
    order_shipping_address_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressName') }})
    order_shipping_address_postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressPostalCode') }})
    order_shipping_address_state_or_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_AddressStateOrRegion') }})
    order_shipping_civility: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_Civility') }})
    order_shipping_company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_CompanyName') }})
    order_shipping_earliest_ship_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_EarliestShipUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_shipping_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_Email') }})
    order_shipping_first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_FirstName') }})
    order_shipping_last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_LastName') }})
    order_shipping_latest_ship_utc_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_LatestShipUtcDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_shipping_method: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_Method') }})
    order_shipping_mobile_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_MobilePhone') }})
    order_shipping_phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_Phone') }})
    order_shipping_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_Price') }})
    order_shipping_shipping_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Shipping_ShippingTax') }})
    order_status_marketplace_order_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Status_MarketplaceOrderStatus') }})
    order_total_commission: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_TotalCommission') }})
    order_total_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_TotalPrice') }})
    order_total_tax: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_TotalTax') }})
    
