import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import associatedgateway as shared_associatedgateway
from ..shared import routefilterprefix as shared_routefilterprefix
from ..shared import directconnectgatewayassociationproposalstate_enum as shared_directconnectgatewayassociationproposalstate_enum


@dataclass_json
@dataclasses.dataclass
class DirectConnectGatewayAssociationProposal:
    r"""DirectConnectGatewayAssociationProposal
    Information about the proposal request to attach a virtual private gateway to a Direct Connect gateway. 
    """
    
    associated_gateway: Optional[shared_associatedgateway.AssociatedGateway] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedGateway') }})
    direct_connect_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_owner_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayOwnerAccount') }})
    existing_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingAllowedPrefixesToDirectConnectGateway') }})
    proposal_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalId') }})
    proposal_state: Optional[shared_directconnectgatewayassociationproposalstate_enum.DirectConnectGatewayAssociationProposalStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('proposalState') }})
    requested_allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedAllowedPrefixesToDirectConnectGateway') }})
    
