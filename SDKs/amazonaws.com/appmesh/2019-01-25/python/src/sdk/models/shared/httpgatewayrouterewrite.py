import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gatewayroutehostnamerewrite as shared_gatewayroutehostnamerewrite
from ..shared import httpgatewayroutepathrewrite as shared_httpgatewayroutepathrewrite
from ..shared import httpgatewayrouteprefixrewrite as shared_httpgatewayrouteprefixrewrite


@dataclass_json
@dataclasses.dataclass
class HTTPGatewayRouteRewrite:
    r"""HTTPGatewayRouteRewrite
    An object representing the gateway route to rewrite.
    """
    
    hostname: Optional[shared_gatewayroutehostnamerewrite.GatewayRouteHostnameRewrite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    path: Optional[shared_httpgatewayroutepathrewrite.HTTPGatewayRoutePathRewrite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    prefix: Optional[shared_httpgatewayrouteprefixrewrite.HTTPGatewayRoutePrefixRewrite] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prefix') }})
    
