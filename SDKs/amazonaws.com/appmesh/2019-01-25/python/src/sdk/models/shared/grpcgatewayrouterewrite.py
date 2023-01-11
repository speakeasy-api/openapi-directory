import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayroutehostnamerewrite as shared_gatewayroutehostnamerewrite


@dataclass_json
@dataclasses.dataclass
class GrpcGatewayRouteRewrite:
    r"""GrpcGatewayRouteRewrite
    An object that represents the gateway route to rewrite.
    """
    
    hostname: Optional[shared_gatewayroutehostnamerewrite.GatewayRouteHostnameRewrite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    
