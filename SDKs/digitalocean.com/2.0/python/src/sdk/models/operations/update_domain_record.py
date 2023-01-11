import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1domains_1percent_7bdomain_namepercent_7d_1records_get_responses_200_content_application_1json_schema_allof_0_properties_domain_records_items as shared_onev2_1domains_1percent_7bdomain_namepercent_7d_1records_get_responses_200_content_application_1json_schema_allof_0_properties_domain_records_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class UpdateDomainRecordPathParams:
    domain_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'domain_name', 'style': 'simple', 'explode': False }})
    domain_record_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'domain_record_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDomainRecord401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class UpdateDomainRecordRequest:
    path_params: UpdateDomainRecordPathParams = dataclasses.field()
    request: Optional[shared_onev2_1domains_1percent_7bdomain_namepercent_7d_1records_get_responses_200_content_application_1json_schema_allof_0_properties_domain_records_items.Onev21domains1Percent7BdomainNamePercent7D1recordsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainRecordsItemsInput] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDomainRecordResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    update_domain_record_200_application_json_any: Optional[Any] = dataclasses.field(default=None)
    update_domain_record_401_application_json_object: Optional[UpdateDomainRecord401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
