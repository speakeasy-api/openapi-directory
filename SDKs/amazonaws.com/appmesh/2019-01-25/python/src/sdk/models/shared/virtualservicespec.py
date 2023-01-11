import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualserviceprovider as shared_virtualserviceprovider


@dataclass_json
@dataclasses.dataclass
class VirtualServiceSpec:
    r"""VirtualServiceSpec
    An object that represents the specification of a virtual service.
    """
    
    provider: Optional[shared_virtualserviceprovider.VirtualServiceProvider] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    
