import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDropletMemoryAvailableMetricsQueryParams:
    end: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    host_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'host_id', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryAvailableMetrics200ApplicationJSONDataResult:
    metric: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    values: list[list[Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class GetDropletMemoryAvailableMetrics200ApplicationJSONDataResultTypeEnum(str, Enum):
    MATRIX = "matrix"


@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryAvailableMetrics200ApplicationJSONData:
    result: list[GetDropletMemoryAvailableMetrics200ApplicationJSONDataResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_type: GetDropletMemoryAvailableMetrics200ApplicationJSONDataResultTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultType') }})
    
class GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryAvailableMetrics200ApplicationJSON:
    data: GetDropletMemoryAvailableMetrics200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: GetDropletMemoryAvailableMetrics200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryAvailableMetrics401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDropletMemoryAvailableMetricsRequest:
    query_params: GetDropletMemoryAvailableMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDropletMemoryAvailableMetricsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_droplet_memory_available_metrics_200_application_json_object: Optional[GetDropletMemoryAvailableMetrics200ApplicationJSON] = dataclasses.field(default=None)
    get_droplet_memory_available_metrics_401_application_json_object: Optional[GetDropletMemoryAvailableMetrics401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
