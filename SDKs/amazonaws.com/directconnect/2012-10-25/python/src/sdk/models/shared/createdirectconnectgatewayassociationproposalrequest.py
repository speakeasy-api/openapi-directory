import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routefilterprefix as shared_routefilterprefix


@dataclass_json
@dataclasses.dataclass
class CreateDirectConnectGatewayAssociationProposalRequest:
    direct_connect_gateway_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayOwnerAccount') }})
    gateway_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayId') }})
    add_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addAllowedPrefixesToDirectConnectGateway') }})
    remove_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removeAllowedPrefixesToDirectConnectGateway') }})
    
