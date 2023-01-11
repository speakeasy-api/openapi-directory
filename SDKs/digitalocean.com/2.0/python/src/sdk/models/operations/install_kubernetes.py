import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclass_json
@dataclasses.dataclass
class InstallKubernetesRequestBody:
    addon_slugs: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('addon_slugs') }})
    cluster_uuid: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster_uuid') }})
    

@dataclass_json
@dataclasses.dataclass
class InstallKubernetes200ApplicationJSON:
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclasses.dataclass
class InstallKubernetes401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class InstallKubernetesRequest:
    request: InstallKubernetesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InstallKubernetesResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    install_kubernetes_200_application_json_object: Optional[InstallKubernetes200ApplicationJSON] = dataclasses.field(default=None)
    install_kubernetes_401_application_json_object: Optional[InstallKubernetes401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
