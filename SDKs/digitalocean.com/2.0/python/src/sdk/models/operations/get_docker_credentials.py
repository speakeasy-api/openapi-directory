import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDockerCredentialsQueryParams:
    expiry_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expiry_seconds', 'style': 'form', 'explode': True }})
    read_write: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'read_write', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDockerCredentials200ApplicationJSONAuthsRegistryDigitaloceanCom:
    auth: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDockerCredentials200ApplicationJSONAuths:
    registry_digitalocean_com: Optional[GetDockerCredentials200ApplicationJSONAuthsRegistryDigitaloceanCom] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registry.digitalocean.com') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDockerCredentials200ApplicationJSON:
    auths: Optional[GetDockerCredentials200ApplicationJSONAuths] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auths') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDockerCredentials401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDockerCredentialsRequest:
    query_params: GetDockerCredentialsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDockerCredentialsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_docker_credentials_200_application_json_object: Optional[GetDockerCredentials200ApplicationJSON] = dataclasses.field(default=None)
    get_docker_credentials_401_application_json_object: Optional[GetDockerCredentials401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
