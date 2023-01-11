import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import defaultgatewayrouterewrite_enum as shared_defaultgatewayrouterewrite_enum


@dataclass_json
@dataclasses.dataclass
class GatewayRouteHostnameRewrite:
    r"""GatewayRouteHostnameRewrite
    An object representing the gateway route host name to rewrite.
    """
    
    default_target_hostname: Optional[shared_defaultgatewayrouterewrite_enum.DefaultGatewayRouteRewriteEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultTargetHostname') }})
    
