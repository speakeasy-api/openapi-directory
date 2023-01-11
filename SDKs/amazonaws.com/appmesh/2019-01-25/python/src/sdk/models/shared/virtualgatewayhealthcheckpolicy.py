import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewayportprotocol_enum as shared_virtualgatewayportprotocol_enum


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayHealthCheckPolicy:
    r"""VirtualGatewayHealthCheckPolicy
    An object that represents the health check policy for a virtual gateway's listener.
    """
    
    healthy_threshold: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthyThreshold') }})
    interval_millis: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intervalMillis') }})
    protocol: shared_virtualgatewayportprotocol_enum.VirtualGatewayPortProtocolEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocol') }})
    timeout_millis: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutMillis') }})
    unhealthy_threshold: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unhealthyThreshold') }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    port: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    
