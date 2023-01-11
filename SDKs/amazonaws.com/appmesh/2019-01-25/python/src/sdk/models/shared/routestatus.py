import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routestatuscode_enum as shared_routestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class RouteStatus:
    r"""RouteStatus
    An object that represents the current status of a route.
    """
    
    status: shared_routestatuscode_enum.RouteStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
