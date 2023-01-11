import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayroutestatuscode_enum as shared_gatewayroutestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class GatewayRouteStatus:
    r"""GatewayRouteStatus
    An object that represents the current status of a gateway route.
    """
    
    status: shared_gatewayroutestatuscode_enum.GatewayRouteStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
