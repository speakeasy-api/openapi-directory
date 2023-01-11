import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualnodeserviceprovider as shared_virtualnodeserviceprovider
from ..shared import virtualrouterserviceprovider as shared_virtualrouterserviceprovider


@dataclass_json
@dataclasses.dataclass
class VirtualServiceProvider:
    r"""VirtualServiceProvider
    An object that represents the provider for a virtual service.
    """
    
    virtual_node: Optional[shared_virtualnodeserviceprovider.VirtualNodeServiceProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualNode') }})
    virtual_router: Optional[shared_virtualrouterserviceprovider.VirtualRouterServiceProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualRouter') }})
    
