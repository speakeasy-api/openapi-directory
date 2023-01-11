import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaydata as shared_virtualgatewaydata


@dataclass_json
@dataclasses.dataclass
class CreateVirtualGatewayOutput:
    virtual_gateway: shared_virtualgatewaydata.VirtualGatewayData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGateway') }})
    
