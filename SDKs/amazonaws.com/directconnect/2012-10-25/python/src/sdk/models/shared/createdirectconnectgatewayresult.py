import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgateway as shared_directconnectgateway


@dataclass_json
@dataclasses.dataclass
class CreateDirectConnectGatewayResult:
    direct_connect_gateway: Optional[shared_directconnectgateway.DirectConnectGateway] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGateway') }})
    
