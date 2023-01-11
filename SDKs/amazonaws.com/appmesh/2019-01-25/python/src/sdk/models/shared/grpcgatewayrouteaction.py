import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import grpcgatewayrouterewrite as shared_grpcgatewayrouterewrite
from ..shared import gatewayroutetarget as shared_gatewayroutetarget


@dataclass_json
@dataclasses.dataclass
class GrpcGatewayRouteAction:
    r"""GrpcGatewayRouteAction
    An object that represents the action to take if a match is determined.
    """
    
    target: shared_gatewayroutetarget.GatewayRouteTarget = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    rewrite: Optional[shared_grpcgatewayrouterewrite.GrpcGatewayRouteRewrite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rewrite') }})
    
