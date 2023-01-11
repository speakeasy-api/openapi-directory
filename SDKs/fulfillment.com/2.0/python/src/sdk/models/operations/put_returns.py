import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneorders_post_requestbody_content_application_1json_schema_properties_recipient as shared_oneorders_post_requestbody_content_application_1json_schema_properties_recipient
from ..shared import security as shared_security
from ..shared import onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby as shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby
from ..shared import oneorders_get_responses_404_content_application_1json_schema as shared_oneorders_get_responses_404_content_application_1json_schema
from ..shared import onereturns_put_responses_201_content_application_1json_schema as shared_onereturns_put_responses_201_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class PutReturnsRmaRequestV2Items:
    quantity_expected: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class PutReturnsRmaRequestV2:
    items: list[PutReturnsRmaRequestV2Items] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    recipient: shared_oneorders_post_requestbody_content_application_1json_schema_properties_recipient.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rma_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    

@dataclasses.dataclass
class PutReturnsSecurity:
    fdc_auth: shared_security.SchemeFdcAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PutReturnsRmaResponseV2Items:
    quantity_expected: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantityExpected') }})
    sku: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass_json
@dataclasses.dataclass
class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2:
    id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    iso2: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso2') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutReturnsRmaResponseV2ConsigneeV2:
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
    iso: Optional[PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso') }})
    phone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone') }})
    updated_at: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[shared_onereturns_get_responses_200_content_application_1json_schema_properties_data_items_properties_updatedby.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedBy') }})
    

@dataclass_json
@dataclasses.dataclass
class PutReturnsRmaResponseV2:
    items: list[PutReturnsRmaResponseV2Items] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    recipient: PutReturnsRmaResponseV2ConsigneeV2 = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rma_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rmaNumber') }})
    merchant_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    

@dataclasses.dataclass
class PutReturnsRequest:
    request: PutReturnsRmaRequestV2 = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutReturnsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PutReturnsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    rma_response_v2: Optional[PutReturnsRmaResponseV2] = dataclasses.field(default=None)
    oneorders_get_responses_404_content_application_1json_schema: Optional[shared_oneorders_get_responses_404_content_application_1json_schema.OneordersGetResponses404ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onereturns_put_responses_201_content_application_1json_schema: Optional[shared_onereturns_put_responses_201_content_application_1json_schema.OnereturnsPutResponses201ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
