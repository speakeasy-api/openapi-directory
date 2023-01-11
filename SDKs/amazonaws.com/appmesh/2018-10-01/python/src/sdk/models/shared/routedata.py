import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import routespec as shared_routespec
from ..shared import routestatus as shared_routestatus


@dataclass_json
@dataclasses.dataclass
class RouteData:
    r"""RouteData
    An object representing a route returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    route_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeName') }})
    virtual_router_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    metadata: Optional[shared_resourcemetadata.ResourceMetadata] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: Optional[shared_routespec.RouteSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: Optional[shared_routestatus.RouteStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
