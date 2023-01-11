import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CreateDirectConnectGatewayRequest:
    direct_connect_gateway_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayName') }})
    amazon_side_asn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonSideAsn') }})
    
