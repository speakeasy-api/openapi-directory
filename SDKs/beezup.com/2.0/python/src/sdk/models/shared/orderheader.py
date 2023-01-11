import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import orderheaderlinks as shared_orderheaderlinks


@dataclass_json
@dataclasses.dataclass
class OrderHeader:
    r"""OrderHeader
    Describe the basic information related to an order. All properties with the prefix order_ are translated in the list of values /user/lov/OrderMetaInfoOrderDetails
    """
    
    account_id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    beez_up_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderId') }})
    etag: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    links: shared_orderheaderlinks.OrderHeaderLinks = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    marketplace_business_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceBusinessCode') }})
    marketplace_technical_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketplaceTechnicalCode') }})
    order_last_modification_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_LastModificationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_marketplace_last_modification_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MarketplaceLastModificationUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_marketplace_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MarketplaceOrderId') }})
    order_purchase_utc_date: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_PurchaseUtcDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_status_beez_up_order_status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Status_BeezUPOrderStatus') }})
    processing: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing') }})
    beez_up_order_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beezUPOrderUrl') }})
    order_buyer_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Buyer_Name') }})
    order_currency_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_CurrencyCode') }})
    order_invoice_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Invoice_Number') }})
    order_invoice_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Invoice_Uri') }})
    order_merchant_e_commerce_software_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareName') }})
    order_merchant_e_commerce_software_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantECommerceSoftwareVersion') }})
    order_merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_MerchantOrderId') }})
    order_status_marketplace_order_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_Status_MarketplaceOrderStatus') }})
    order_total_price: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_TotalPrice') }})
    
