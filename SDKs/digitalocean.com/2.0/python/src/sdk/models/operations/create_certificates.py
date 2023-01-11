import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1certificates_get_responses_200_content_application_1json_schema_allof_0_properties_certificates_items as shared_onev2_1certificates_get_responses_200_content_application_1json_schema_allof_0_properties_certificates_items
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema

class CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum(str, Enum):
    CUSTOM = "custom"
    LETS_ENCRYPT = "lets_encrypt"


@dataclass_json
@dataclasses.dataclass
class CreateCertificatesRequestBodyLetSEncryptCertificateRequest:
    dns_names: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_names') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[CreateCertificatesRequestBodyLetSEncryptCertificateRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum(str, Enum):
    CUSTOM = "custom"
    LETS_ENCRYPT = "lets_encrypt"


@dataclass_json
@dataclasses.dataclass
class CreateCertificatesRequestBodyCustomCertificateRequest:
    leaf_certificate: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaf_certificate') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    private_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('private_key') }})
    certificate_chain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate_chain') }})
    type: Optional[CreateCertificatesRequestBodyCustomCertificateRequestTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCertificates201ApplicationJSON:
    certificate: Optional[shared_onev2_1certificates_get_responses_200_content_application_1json_schema_allof_0_properties_certificates_items.Onev21certificatesGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesCertificatesItems] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateCertificates401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class CreateCertificatesRequest:
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateCertificatesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    create_certificates_201_application_json_object: Optional[CreateCertificates201ApplicationJSON] = dataclasses.field(default=None)
    create_certificates_401_application_json_object: Optional[CreateCertificates401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
