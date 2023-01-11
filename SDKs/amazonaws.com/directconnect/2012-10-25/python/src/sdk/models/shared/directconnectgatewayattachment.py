import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgatewayattachmentstate_enum as shared_directconnectgatewayattachmentstate_enum
from ..shared import directconnectgatewayattachmenttype_enum as shared_directconnectgatewayattachmenttype_enum


@dataclass_json
@dataclasses.dataclass
class DirectConnectGatewayAttachment:
    r"""DirectConnectGatewayAttachment
    Information about an attachment between a Direct Connect gateway and a virtual interface.
    """
    
    attachment_state: Optional[shared_directconnectgatewayattachmentstate_enum.DirectConnectGatewayAttachmentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentState') }})
    attachment_type: Optional[shared_directconnectgatewayattachmenttype_enum.DirectConnectGatewayAttachmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachmentType') }})
    direct_connect_gateway_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayId') }})
    state_change_error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChangeError') }})
    virtual_interface_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceId') }})
    virtual_interface_owner_account: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceOwnerAccount') }})
    virtual_interface_region: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualInterfaceRegion') }})
    
