import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby as shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby
from ..shared import oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee as shared_oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee


@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy:
    r"""OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy
    Responsibility for resolving this issue
    """
    
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2:
    code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    detail_code: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCode') }})
    stage: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2Stage = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stage') }})
    state: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2State = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    action_required_by: Optional[OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2ActionRequiredBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionRequiredBy') }})
    detail: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_closed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isClosed') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    created_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    date_: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2StatusTypeV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2:
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
    iso: Optional[OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaParentOrder:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2:
    barcode_scan_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcodeScanValue') }})
    carrier: Optional[OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2CarrierSimpleV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2:
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclasses.dataclass
class OneordersPostResponses201ContentApplication1jsonSchema:
    current_status: OneordersPostResponses201ContentApplication1jsonSchemaStatusEventV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStatus') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    merchant: OneordersPostResponses201ContentApplication1jsonSchemaMerchantV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant') }})
    merchant_order_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    merchant_shipping_method: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantShippingMethod') }})
    original_consignee: OneordersPostResponses201ContentApplication1jsonSchemaConsigneeV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalConsignee') }})
    recorded_on: datetime = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordedOn'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    validated_consignee: shared_oneorders_post_responses_201_content_application_1json_schema_properties_originalconsignee.OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('validatedConsignee') }})
    depart_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dispatch_date: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parent_order: Optional[OneordersPostResponses201ContentApplication1jsonSchemaParentOrder] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentOrder') }})
    purchase_order_num: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrderNum') }})
    tracking_numbers: Optional[list[OneordersPostResponses201ContentApplication1jsonSchemaTrackingNumberV2]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingNumbers') }})
    warehouse: Optional[OneordersPostResponses201ContentApplication1jsonSchemaWarehouseV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warehouse') }})
    
