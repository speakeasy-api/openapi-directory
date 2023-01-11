import dataclasses
from typing import Optional
from ..shared import onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items as shared_onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items


@dataclasses.dataclass
class GetDirectDebitByUUIDPathParams:
    direct_debit_uuid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'directDebitUuid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDirectDebitByUUIDRequest:
    path_params: GetDirectDebitByUUIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDirectDebitByUUIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items: Optional[shared_onedirectdebits_get_responses_200_content_application_1json_schema_properties_directdebits_items.OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems] = dataclasses.field(default=None)
    
