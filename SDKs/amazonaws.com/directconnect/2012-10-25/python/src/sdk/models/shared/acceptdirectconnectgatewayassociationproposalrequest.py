import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routefilterprefix as shared_routefilterprefix


@dataclass_json
@dataclasses.dataclass
class AcceptDirectConnectGatewayAssociationProposalRequest:
    associated_gateway_owner_account: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedGatewayOwnerAccount') }})
    direct_connect_gateway_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    proposal_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    override_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideAllowedPrefixesToDirectConnectGateway') }})
    
