import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetKubeconfigPathParams:
    cluster_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'cluster_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetKubeconfigQueryParams:
    expiry_seconds: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expiry_seconds', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetKubeconfig401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetKubeconfigRequest:
    path_params: GetKubeconfigPathParams = dataclasses.field()
    query_params: GetKubeconfigQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetKubeconfigResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_kubeconfig_200_application_yaml_string: Optional[str] = dataclasses.field(default=None)
    get_kubeconfig_401_application_json_object: Optional[GetKubeconfig401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
