import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualRouterServiceProvider:
    r"""VirtualRouterServiceProvider
    An object that represents a virtual node service provider.
    """
    
    virtual_router_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouterName') }})
    
