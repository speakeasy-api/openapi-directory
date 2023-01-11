import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayroutevirtualservice as shared_gatewayroutevirtualservice


@dataclass_json
@dataclasses.dataclass
class GatewayRouteTarget:
    r"""GatewayRouteTarget
    An object that represents a gateway route target.
    """
    
    virtual_service: shared_gatewayroutevirtualservice.GatewayRouteVirtualService = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualService') }})
    
