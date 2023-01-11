import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcemetadata as shared_resourcemetadata
from ..shared import virtualgatewayspec as shared_virtualgatewayspec
from ..shared import virtualgatewaystatus as shared_virtualgatewaystatus


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayData:
    r"""VirtualGatewayData
    An object that represents a virtual gateway returned by a describe operation.
    """
    
    mesh_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshName') }})
    metadata: shared_resourcemetadata.ResourceMetadata = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    spec: shared_virtualgatewayspec.VirtualGatewaySpec = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    status: shared_virtualgatewaystatus.VirtualGatewayStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    virtual_gateway_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayName') }})
    
