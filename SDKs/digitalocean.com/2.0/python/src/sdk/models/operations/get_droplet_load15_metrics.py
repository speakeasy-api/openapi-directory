import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDropletLoad15MetricsQueryParams:
    end: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    host_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'host_id', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletLoad15Metrics200ApplicationJSONDataResult:
    metric: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    values: list[list[Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class GetDropletLoad15Metrics200ApplicationJSONDataResultTypeEnum(str, Enum):
    MATRIX = "matrix"


@dataclass_json
@dataclasses.dataclass
class GetDropletLoad15Metrics200ApplicationJSONData:
    result: list[GetDropletLoad15Metrics200ApplicationJSONDataResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_type: GetDropletLoad15Metrics200ApplicationJSONDataResultTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultType') }})
    
class GetDropletLoad15Metrics200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetDropletLoad15Metrics200ApplicationJSON:
    data: GetDropletLoad15Metrics200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: GetDropletLoad15Metrics200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletLoad15Metrics401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDropletLoad15MetricsRequest:
    query_params: GetDropletLoad15MetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDropletLoad15MetricsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_droplet_load15_metrics_200_application_json_object: Optional[GetDropletLoad15Metrics200ApplicationJSON] = dataclasses.field(default=None)
    get_droplet_load15_metrics_401_application_json_object: Optional[GetDropletLoad15Metrics401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
