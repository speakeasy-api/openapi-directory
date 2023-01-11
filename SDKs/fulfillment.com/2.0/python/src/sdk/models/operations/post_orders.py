import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby as shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby
from ..shared import oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee as shared_oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee
from ..shared import oneorders_get_responses_404_content_application_1json_schema as shared_oneorders_get_responses_404_content_application_1json_schema

class PostOrdersOrderRequestV2IntegratorEnum(str, Enum):
    ONE_SHOPPING_CART = "1ShoppingCart"
    THREED_CART = "3dCart"
    ADOBE_BC = "AdobeBC"
    AMAZON_AU = "AmazonAU"
    AMAZON_EU = "AmazonEU"
    AMAZON_NA = "AmazonNA"
    BIG_COMMERCE = "BigCommerce"
    BRAND_BOOM = "BrandBoom"
    BRIGHT_PEARL = "BrightPearl"
    BUY_GOODS = "BuyGoods"
    CELERY = "Celery"
    CHANNEL_ADVISOR = "ChannelAdvisor"
    CLICKBANK = "Clickbank"
    COMMERCE_HUB = "CommerceHub"
    CUSTOM = "Custom"
    DEMANDWARE = "Demandware"
    EBAY = "Ebay"
    ECWID = "Ecwid"
    ETSY = "Etsy"
    FOXY_CART = "FoxyCart"
    GOODSIE = "Goodsie"
    INFUSIONSOFT = "Infusionsoft"
    KONNEKTIVE = "Konnektive"
    LIME_LIGHT = "LimeLight"
    LINIO = "Linio"
    LINNWORKS = "Linnworks"
    MAGENTO = "Magento"
    NETSUITE = "Netsuite"
    NEW_EGG = "NewEgg"
    NEXTERNAL = "Nexternal"
    NU_ORDER = "NuOrder"
    OPENCART = "Opencart"
    ORDER_WAVE = "OrderWave"
    OS_COMMERCE1 = "osCommerce1"
    OVERSTOCK = "Overstock"
    PAY_PAL = "PayPal"
    PRESTA_SHOP = "PrestaShop"
    PRICEFALLS = "Pricefalls"
    QUICKBOOKS = "Quickbooks"
    RAKUTEN = "Rakuten"
    SEARS = "Sears"
    SELLBRITE = "Sellbrite"
    SELLER_CLOUD = "SellerCloud"
    SHIPSTATION = "Shipstation"
    SHOPIFY = "Shopify"
    SKUBANA = "Skubana"
    SOLID_COMMERCE = "SolidCommerce"
    SPARK_PAY = "SparkPay"
    SPREE_COMMERCE = "SpreeCommerce"
    SPS_COMMERCE = "spsCommerce"
    STITCH_LABS = "StitchLabs"
    STONE_EDGE = "StoneEdge"
    TRADE_GECKO = "TradeGecko"
    ULTRA_CART = "UltraCart"
    VOLUSION = "Volusion"
    VTEX = "VTEX"
    WALMART = "Walmart"
    WOO_COMMERCE = "WooCommerce"
    YAHOO = "Yahoo"


@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderRequestV2Items:
    declared_value: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('declaredValue') }})
    quantity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderRequestV2ConsigneeNewV2:
    address1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    email: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    phone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    postal_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderRequestV2Warehouse:
    r"""PostOrdersOrderRequestV2Warehouse
    We automatically select a warehouse based on inventory availability, requested carrier and delivery schedule, and carrier cost. You may however override this process. Because this is not recommended please inform your AE prior to using so they may enable this feature.
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderRequestV2:
    items: list[PostOrdersOrderRequestV2Items] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    recipient: PostOrdersOrderRequestV2ConsigneeNewV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    shipping_method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingMethod') }})
    integrator: Optional[PostOrdersOrderRequestV2IntegratorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrator') }})
    merchant_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    notes: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    warehouse: Optional[PostOrdersOrderRequestV2Warehouse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    

@dataclasses.dataclass
class PostOrdersSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersErrorStandardWithContextV2:
    context: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('context') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy:
    r"""PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
    Responsibility for resolving this issue
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2StatusEventV2StatusTypeV2:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCode') }})
    stage: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2Stage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    state: PostOrdersOrderResponseV2StatusEventV2StatusTypeV2State = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    action_required_by: Optional[PostOrdersOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRequiredBy') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_closed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isClosed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2StatusEventV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    created_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[PostOrdersOrderResponseV2StatusEventV2StatusTypeV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2MerchantV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2ConsigneeV2:
    address1: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address_locality: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressLocality') }})
    address_region: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addressRegion') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    postal_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    address2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    company_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyName') }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    iso: Optional[PostOrdersOrderResponseV2ConsigneeV2IsoCountryV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2ParentOrder:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2TrackingNumberV2:
    barcode_scan_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeScanValue') }})
    carrier: Optional[PostOrdersOrderResponseV2TrackingNumberV2CarrierSimpleV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2WarehouseV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class PostOrdersOrderResponseV2:
    current_status: PostOrdersOrderResponseV2StatusEventV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant: PostOrdersOrderResponseV2MerchantV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    merchant_shipping_method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantShippingMethod') }})
    original_consignee: PostOrdersOrderResponseV2ConsigneeV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalConsignee') }})
    recorded_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validated_consignee: shared_oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedConsignee') }})
    depart_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_order: Optional[PostOrdersOrderResponseV2ParentOrder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrder') }})
    purchase_order_num: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNum') }})
    tracking_numbers: Optional[list[PostOrdersOrderResponseV2TrackingNumberV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumbers') }})
    warehouse: Optional[PostOrdersOrderResponseV2WarehouseV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    

@dataclasses.dataclass
class PostOrdersRequest:
    request: PostOrdersOrderRequestV2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostOrdersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_standard_with_context_v2: Optional[PostOrdersErrorStandardWithContextV2] = dataclasses.field(default=None)
    order_response_v2: Optional[PostOrdersOrderResponseV2] = dataclasses.field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared_oneorders_get_responses_404_content_application_1json_schema.OneordersGetResponses404ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
