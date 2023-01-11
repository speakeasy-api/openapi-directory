import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency as shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency


@dataclasses.dataclass
class GetListOfAspspsQueryParams:
    currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfAspspsAspspsAspspCountry:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfAspspsAspspsAspsp:
    alias: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    aspsp_uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspspUuid') }})
    country: Optional[GetListOfAspspsAspspsAspspCountry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    currency: Optional[shared_oneaccounts_get_responses_200_content_application_1json_schema_properties_accounts_items_properties_currency.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateCreated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logo_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    

@dataclass_json
@dataclasses.dataclass
class GetListOfAspspsAspsps:
    aspsps: Optional[list[GetListOfAspspsAspspsAspsp]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aspsps') }})
    total: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclasses.dataclass
class GetListOfAspspsRequest:
    query_params: GetListOfAspspsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListOfAspspsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    aspsps: Optional[GetListOfAspspsAspsps] = dataclasses.field(default=None)
    
