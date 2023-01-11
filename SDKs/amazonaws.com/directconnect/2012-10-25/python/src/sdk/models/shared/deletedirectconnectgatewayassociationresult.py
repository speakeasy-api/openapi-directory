import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgatewayassociation as shared_directconnectgatewayassociation


@dataclass_json
@dataclasses.dataclass
class DeleteDirectConnectGatewayAssociationResult:
    direct_connect_gateway_association: Optional[shared_directconnectgatewayassociation.DirectConnectGatewayAssociation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayAssociation') }})
    
