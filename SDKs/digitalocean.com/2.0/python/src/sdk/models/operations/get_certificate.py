import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1certificates_get_responses_200_content_application_1json_schema_allof_0_properties_certificates_items as shared_onev2_1certificates_get_responses_200_content_application_1json_schema_allof_0_properties_certificates_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetCertificatePathParams:
    certificate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'certificate_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetCertificate200ApplicationJSON:
    certificate: Optional[shared_onev2_1certificates_get_responses_200_content_application_1json_schema_allof_0_properties_certificates_items.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    

@dataclass_json
@dataclasses.dataclass
class GetCertificate401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetCertificateRequest:
    path_params: GetCertificatePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCertificateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_certificate_200_application_json_object: Optional[GetCertificate200ApplicationJSON] = dataclasses.field(default=None)
    get_certificate_401_application_json_object: Optional[GetCertificate401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
