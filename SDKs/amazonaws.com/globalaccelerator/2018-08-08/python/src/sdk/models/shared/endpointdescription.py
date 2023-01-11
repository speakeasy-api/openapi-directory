import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import healthstate_enum as shared_healthstate_enum


@dataclass_json
@dataclasses.dataclass
class EndpointDescription:
    r"""EndpointDescription
    A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
    """
    
    client_ip_preservation_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientIPPreservationEnabled') }})
    endpoint_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndpointId') }})
    health_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthReason') }})
    health_state: Optional[shared_healthstate_enum.HealthStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HealthState') }})
    weight: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Weight') }})
    
