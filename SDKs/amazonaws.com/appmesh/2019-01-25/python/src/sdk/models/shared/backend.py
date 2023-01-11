import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualservicebackend as shared_virtualservicebackend


@dataclass_json
@dataclasses.dataclass
class Backend:
    r"""Backend
    An object that represents the backends that a virtual node is expected to send outbound traffic to.
    """
    
    virtual_service: Optional[shared_virtualservicebackend.VirtualServiceBackend] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualService') }})
    
