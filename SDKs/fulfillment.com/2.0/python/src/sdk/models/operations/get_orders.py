import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import hydrateparam_enum as shared_hydrateparam_enum
from ..shared import security as shared_security
from ..shared import onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby as shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby
from ..shared import oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee as shared_oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee
from ..shared import oneorders_post_responses_201_content_application_1json_schema as shared_oneorders_post_responses_201_content_application_1json_schema


@dataclasses.dataclass
class GetOrdersQueryParams:
    from_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fromDate', 'style': 'form', 'explode': True }})
    to_date: str = dataclasses.field(metadata={'query_param': { 'field_name': 'toDate', 'style': 'form', 'explode': True }})
    hydrate: Optional[list[shared_hydrateparam_enum.HydrateParamEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hydrate', 'style': 'form', 'explode': False }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    merchant_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'merchantIds', 'style': 'form', 'explode': False }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    warehouse_ids: Optional[list[int]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'warehouseIds', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class GetOrdersSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrdersErrorStandardV2:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy:
    r"""GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy
    Responsibility for resolving this issue
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCode') }})
    stage: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2Stage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    state: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2State = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    action_required_by: Optional[GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2ActionRequiredBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRequiredBy') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_closed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isClosed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2StatusEventV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    created_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[GetOrders200ApplicationJSONOrderResponseV2StatusEventV2StatusTypeV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails:
    expiration_date: Optional[date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lot_num: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lotNum') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    serial_num: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNum') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails:
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    external_sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalSku') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalQuantity') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData:
    declared_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declaredValue') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    quantity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    sku: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inventory_details: Optional[list[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2InventoryDetails]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryDetails') }})
    line_details: Optional[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2LineDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineDetails') }})
    requested_sku_data: Optional[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2RequestedSkuData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedSkuData') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2MerchantV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2:
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
    iso: Optional[GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2IsoCountryV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2ParentOrder:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    symbol: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('symbol') }})
    can_reprint_postage: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canReprintPostage') }})
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    include_peripherals: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includePeripherals') }})
    internal_rates_only: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internalRatesOnly') }})
    requires_dimensions: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requiresDimensions') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers:
    carrier: Optional[GetOrders200ApplicationJSONOrderResponseV2TrackingNumbersCarrierHydratedV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2WarehouseV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class GetOrders200ApplicationJSONOrderResponseV2:
    r"""GetOrders200ApplicationJSONOrderResponseV2
    Requires hydrate to be set in the request and the corresponding node will be filled.
    """
    
    current_status: GetOrders200ApplicationJSONOrderResponseV2StatusEventV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant: GetOrders200ApplicationJSONOrderResponseV2MerchantV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    merchant_shipping_method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantShippingMethod') }})
    original_consignee: GetOrders200ApplicationJSONOrderResponseV2ConsigneeV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalConsignee') }})
    recorded_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validated_consignee: shared_oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedConsignee') }})
    depart_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    integrator: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integrator') }})
    line_items: Optional[list[GetOrders200ApplicationJSONOrderResponseV2LineItemsResponseV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    parent_order: Optional[GetOrders200ApplicationJSONOrderResponseV2ParentOrder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrder') }})
    purchase_order_num: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNum') }})
    tracking_numbers: Optional[list[GetOrders200ApplicationJSONOrderResponseV2TrackingNumbers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumbers') }})
    warehouse: Optional[GetOrders200ApplicationJSONOrderResponseV2WarehouseV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    

@dataclasses.dataclass
class GetOrdersRequest:
    query_params: GetOrdersQueryParams = dataclasses.field()
    security: GetOrdersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOrdersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_standard_v2: Optional[GetOrdersErrorStandardV2] = dataclasses.field(default=None)
    order_response_one_of_v2: Optional[Any] = dataclasses.field(default=None)
    
