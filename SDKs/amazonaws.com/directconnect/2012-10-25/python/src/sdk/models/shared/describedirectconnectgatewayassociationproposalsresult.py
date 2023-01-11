import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgatewayassociationproposal as shared_directconnectgatewayassociationproposal


@dataclass_json
@dataclasses.dataclass
class DescribeDirectConnectGatewayAssociationProposalsResult:
    direct_connect_gateway_association_proposals: Optional[list[shared_directconnectgatewayassociationproposal.DirectConnectGatewayAssociationProposal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayAssociationProposals') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
