import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualrouterref as shared_virtualrouterref


@dataclass_json
@dataclasses.dataclass
class ListVirtualRoutersOutput:
    r"""ListVirtualRoutersOutput
    <zonbook></zonbook><xhtml></xhtml>
    """
    
    virtual_routers: list[shared_virtualrouterref.VirtualRouterRef] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouters') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
