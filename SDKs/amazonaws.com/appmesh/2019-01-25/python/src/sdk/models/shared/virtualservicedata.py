import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import virtualservicespec as shared_virtualservicespec
from ..shared import virtualservicestatus as shared_virtualservicestatus


@dataclass_json
@dataclasses.dataclass
class VirtualServiceData:
    r"""VirtualServiceData
    An object that represents a virtual service returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: shared_virtualservicespec.VirtualServiceSpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: shared_virtualservicestatus.VirtualServiceStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_service_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualServiceName') }})
    
