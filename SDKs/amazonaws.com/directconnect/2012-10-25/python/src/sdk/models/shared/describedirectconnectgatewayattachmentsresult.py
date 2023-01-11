import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import directconnectgatewayattachment as shared_directconnectgatewayattachment


@dataclass_json
@dataclasses.dataclass
class DescribeDirectConnectGatewayAttachmentsResult:
    direct_connect_gateway_attachments: Optional[list[shared_directconnectgatewayattachment.DirectConnectGatewayAttachment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directConnectGatewayAttachments') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
