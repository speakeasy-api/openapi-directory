import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routestatuscode_enum as shared_routestatuscode_enum


@dataclass_json
@dataclasses.dataclass
class RouteStatus:
    r"""RouteStatus
    An object representing the current status of a route.
    """
    
    status: Optional[shared_routestatuscode_enum.RouteStatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
