import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualrouterlistener as shared_virtualrouterlistener


@dataclass_json
@dataclasses.dataclass
class VirtualRouterSpec:
    r"""VirtualRouterSpec
    An object that represents the specification of a virtual router.
    """
    
    listeners: Optional[list[shared_virtualrouterlistener.VirtualRouterListener]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listeners') }})
    
