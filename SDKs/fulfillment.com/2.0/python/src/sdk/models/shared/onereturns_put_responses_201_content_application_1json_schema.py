import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby as shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby


@dataclass_json
@dataclasses.dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaItems:
    quantity_expected: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2:
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
    iso: Optional[OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2IsoCountryV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class OnereturnsPutResponses201ContentApplication1jsonSchema:
    items: list[OnereturnsPutResponses201ContentApplication1jsonSchemaItems] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    recipient: OnereturnsPutResponses201ContentApplication1jsonSchemaConsigneeV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rma_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    
