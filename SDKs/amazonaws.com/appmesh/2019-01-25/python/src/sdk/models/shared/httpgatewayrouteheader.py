import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import headermatchmethod as shared_headermatchmethod


@dataclass_json
@dataclasses.dataclass
class HTTPGatewayRouteHeader:
    r"""HTTPGatewayRouteHeader
    An object that represents the HTTP header in the gateway route.
    """
    
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    invert: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invert') }})
    match: Optional[shared_headermatchmethod.HeaderMatchMethod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    
