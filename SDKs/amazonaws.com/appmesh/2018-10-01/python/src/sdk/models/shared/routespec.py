import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import httproute as shared_httproute


@dataclass_json
@dataclasses.dataclass
class RouteSpec:
    r"""RouteSpec
    An object representing the specification of a route.
    """
    
    http_route: Optional[shared_httproute.HTTPRoute] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    
