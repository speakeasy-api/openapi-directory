import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VirtualRouterSpec:
    r"""VirtualRouterSpec
    An object representing the specification of a virtual router.
    """
    
    service_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceNames') }})
    
