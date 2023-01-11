import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_1percent_7bdeployment_idpercent_7d_1components_1percent_7bcomponent_namepercent_7d_1logs_get_parameters_4_enum as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_1percent_7bdeployment_idpercent_7d_1components_1percent_7bcomponent_namepercent_7d_1logs_get_parameters_4_enum
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema
from ..shared import onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_1percent_7bdeployment_idpercent_7d_1components_1percent_7bcomponent_namepercent_7d_1logs_get_responses_200_content_application_1json_schema as shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_1percent_7bdeployment_idpercent_7d_1components_1percent_7bcomponent_namepercent_7d_1logs_get_responses_200_content_application_1json_schema


@dataclasses.dataclass
class GetLogsAggregatePathParams:
    app_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'app_id', 'style': 'simple', 'explode': False }})
    deployment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLogsAggregateQueryParams:
    type: shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_1percent_7bdeployment_idpercent_7d_1components_1percent_7bcomponent_namepercent_7d_1logs_get_parameters_4_enum.Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetParameters4Enum = dataclasses.field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    follow: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'follow', 'style': 'form', 'explode': True }})
    pod_connection_timeout: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pod_connection_timeout', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetLogsAggregate401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetLogsAggregateRequest:
    path_params: GetLogsAggregatePathParams = dataclasses.field()
    query_params: GetLogsAggregateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLogsAggregateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_logs_aggregate_401_application_json_object: Optional[GetLogsAggregate401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    onev2_1apps_1_percent_7_bapp_id_percent_7_d_1deployments_1_percent_7_bdeployment_id_percent_7_d_1components_1_percent_7_bcomponent_name_percent_7_d_1logs_get_responses_200_content_application_1json_schema: Optional[shared_onev2_1apps_1percent_7bapp_idpercent_7d_1deployments_1percent_7bdeployment_idpercent_7d_1components_1percent_7bcomponent_namepercent_7d_1logs_get_responses_200_content_application_1json_schema.Onev21apps1Percent7BappIDPercent7D1deployments1Percent7BdeploymentIDPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
