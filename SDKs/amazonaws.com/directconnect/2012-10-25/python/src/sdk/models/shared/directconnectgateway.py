import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgatewaystate_enum as shared_directconnectgatewaystate_enum


@dataclass_json
@dataclasses.dataclass
class DirectConnectGateway:
    r"""DirectConnectGateway
    Information about a Direct Connect gateway, which enables you to connect virtual interfaces and virtual private gateway or transit gateways.
    """
    
    amazon_side_asn: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amazonSideAsn') }})
    direct_connect_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayName') }})
    direct_connect_gateway_state: Optional[shared_directconnectgatewaystate_enum.DirectConnectGatewayStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayState') }})
    owner_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerAccount') }})
    state_change_error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeError') }})
    
