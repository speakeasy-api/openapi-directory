import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import endpointdescription as shared_endpointdescription
from ..shared import healthcheckprotocol_enum as shared_healthcheckprotocol_enum
from ..shared import portoverride as shared_portoverride


@dataclass_json
@dataclasses.dataclass
class EndpointGroup:
    r"""EndpointGroup
    A complex type for the endpoint group. An AWS Region can have only one endpoint group for a specific listener. 
    """
    
    endpoint_descriptions: Optional[list[shared_endpointdescription.EndpointDescription]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointDescriptions') }})
    endpoint_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupArn') }})
    endpoint_group_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointGroupRegion') }})
    health_check_interval_seconds: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckIntervalSeconds') }})
    health_check_path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckPath') }})
    health_check_port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckPort') }})
    health_check_protocol: Optional[shared_healthcheckprotocol_enum.HealthCheckProtocolEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthCheckProtocol') }})
    port_overrides: Optional[list[shared_portoverride.PortOverride]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortOverrides') }})
    threshold_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThresholdCount') }})
    traffic_dial_percentage: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrafficDialPercentage') }})
    
