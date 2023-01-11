import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import routefilterprefix as shared_routefilterprefix
from ..shared import associatedgateway as shared_associatedgateway
from ..shared import directconnectgatewayassociationstate_enum as shared_directconnectgatewayassociationstate_enum


@dataclass_json
@dataclasses.dataclass
class DirectConnectGatewayAssociation:
    r"""DirectConnectGatewayAssociation
    Information about an association between a Direct Connect gateway and a virtual private gateway or transit gateway.
    """
    
    allowed_prefixes_to_direct_connect_gateway: Optional[list[shared_routefilterprefix.RouteFilterPrefix]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedPrefixesToDirectConnectGateway') }})
    associated_gateway: Optional[shared_associatedgateway.AssociatedGateway] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedGateway') }})
    association_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationId') }})
    association_state: Optional[shared_directconnectgatewayassociationstate_enum.DirectConnectGatewayAssociationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associationState') }})
    direct_connect_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    direct_connect_gateway_owner_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayOwnerAccount') }})
    state_change_error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeError') }})
    virtual_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayId') }})
    virtual_gateway_owner_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayOwnerAccount') }})
    virtual_gateway_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualGatewayRegion') }})
    
