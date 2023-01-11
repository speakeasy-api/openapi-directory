import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_parameters_0_enum as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_parameters_0_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetLogsPathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    component_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'component_name', 'style': 'simple', 'explode': False }})
    deployment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLogsQueryParams:
    type: shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_get_parameters_0_enum.Onev21apps1Percent7BappIDPercent7D1deploymentsGetParameters0Enum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    follow: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'follow', 'style': 'form', 'explode': True }})
    pod_connection_timeout: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pod_connection_timeout', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetLogs200ApplicationJSON:
    historic_urls: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('historic_urls') }})
    live_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('live_url') }})
    

@dataclass_json
@dataclasses.dataclass
class GetLogs401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetLogsRequest:
    path_params: GetLogsPathParams = dataclasses.field()
    query_params: GetLogsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLogsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_logs_200_application_json_object: Optional[GetLogs200ApplicationJSON] = dataclasses.field(default=None)
    get_logs_401_application_json_object: Optional[GetLogs401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
