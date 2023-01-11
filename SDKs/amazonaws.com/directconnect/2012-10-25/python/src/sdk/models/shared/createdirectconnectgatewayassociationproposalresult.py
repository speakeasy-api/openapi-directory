import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgatewayassociationproposal as shared_directconnectgatewayassociationproposal


@dataclass_json
@dataclasses.dataclass
class CreateDirectConnectGatewayAssociationProposalResult:
    direct_connect_gateway_association_proposal: Optional[shared_directconnectgatewayassociationproposal.DirectConnectGatewayAssociationProposal] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayAssociationProposal') }})
    
