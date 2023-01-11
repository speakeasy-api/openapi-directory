import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import clientpolicy as shared_clientpolicy


@dataclass_json
@dataclasses.dataclass
class VirtualServiceBackend:
    r"""VirtualServiceBackend
    An object that represents a virtual service backend for a virtual node.
    """
    
    virtual_service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServiceName') }})
    client_policy: Optional[shared_clientpolicy.ClientPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientPolicy') }})
    
