import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema


@dataclasses.dataclass
class GetDropletMemoryFreeMetricsQueryParams:
    end: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    host_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'host_id', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryFreeMetrics200ApplicationJSONDataResult:
    metric: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    values: list[list[Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class GetDropletMemoryFreeMetrics200ApplicationJSONDataResultTypeEnum(str, Enum):
    MATRIX = "matrix"


@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryFreeMetrics200ApplicationJSONData:
    result: list[GetDropletMemoryFreeMetrics200ApplicationJSONDataResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_type: GetDropletMemoryFreeMetrics200ApplicationJSONDataResultTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultType') }})
    
class GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryFreeMetrics200ApplicationJSON:
    data: GetDropletMemoryFreeMetrics200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: GetDropletMemoryFreeMetrics200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletMemoryFreeMetrics401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDropletMemoryFreeMetricsRequest:
    query_params: GetDropletMemoryFreeMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDropletMemoryFreeMetricsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_droplet_memory_free_metrics_200_application_json_object: Optional[GetDropletMemoryFreeMetrics200ApplicationJSON] = dataclasses.field(default=None)
    get_droplet_memory_free_metrics_401_application_json_object: Optional[GetDropletMemoryFreeMetrics401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
