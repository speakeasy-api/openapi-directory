import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgateway as shared_directconnectgateway


@dataclass_json
@dataclasses.dataclass
class DescribeDirectConnectGatewaysResult:
    direct_connect_gateways: Optional[list[shared_directconnectgateway.DirectConnectGateway]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGateways') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
