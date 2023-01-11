import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import onev2_11_clicks_get_responses_401_content_application_1json_schema as shared_onev2_11_clicks_get_responses_401_content_application_1json_schema

class GetDropletBandwidthMetricsDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class GetDropletBandwidthMetricsInterfaceEnum(str, Enum):
    PRIVATE = "private"
    PUBLIC = "public"


@dataclasses.dataclass
class GetDropletBandwidthMetricsQueryParams:
    direction: GetDropletBandwidthMetricsDirectionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    end: str = dataclasses.field(metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    host_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'host_id', 'style': 'form', 'explode': True }})
    interface: GetDropletBandwidthMetricsInterfaceEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'interface', 'style': 'form', 'explode': True }})
    start: str = dataclasses.field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletBandwidthMetrics200ApplicationJSONDataResult:
    metric: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metric') }})
    values: list[list[Any]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
class GetDropletBandwidthMetrics200ApplicationJSONDataResultTypeEnum(str, Enum):
    MATRIX = "matrix"


@dataclass_json
@dataclasses.dataclass
class GetDropletBandwidthMetrics200ApplicationJSONData:
    result: list[GetDropletBandwidthMetrics200ApplicationJSONDataResult] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    result_type: GetDropletBandwidthMetrics200ApplicationJSONDataResultTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultType') }})
    
class GetDropletBandwidthMetrics200ApplicationJSONStatusEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetDropletBandwidthMetrics200ApplicationJSON:
    data: GetDropletBandwidthMetrics200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: GetDropletBandwidthMetrics200ApplicationJSONStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclasses.dataclass
class GetDropletBandwidthMetrics401ApplicationJSON:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    

@dataclasses.dataclass
class GetDropletBandwidthMetricsRequest:
    query_params: GetDropletBandwidthMetricsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDropletBandwidthMetricsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    get_droplet_bandwidth_metrics_200_application_json_object: Optional[GetDropletBandwidthMetrics200ApplicationJSON] = dataclasses.field(default=None)
    get_droplet_bandwidth_metrics_401_application_json_object: Optional[GetDropletBandwidthMetrics401ApplicationJSON] = dataclasses.field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared_onev2_11_clicks_get_responses_401_content_application_1json_schema.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = dataclasses.field(default=None)
    
