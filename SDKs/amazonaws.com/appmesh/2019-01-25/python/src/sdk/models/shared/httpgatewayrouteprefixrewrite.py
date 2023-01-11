import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import defaultgatewayrouterewrite_enum as shared_defaultgatewayrouterewrite_enum


@dataclass_json
@dataclasses.dataclass
class HTTPGatewayRoutePrefixRewrite:
    r"""HTTPGatewayRoutePrefixRewrite
    An object representing the beginning characters of the route to rewrite.
    """
    
    default_prefix: Optional[shared_defaultgatewayrouterewrite_enum.DefaultGatewayRouteRewriteEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultPrefix') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
