import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AttachVpnGatewayResultVpcAttachment:
    r"""AttachVpnGatewayResultVpcAttachment
    Information about the attachment.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AttachVpnGatewayResult:
    r"""AttachVpnGatewayResult
    Contains the output of AttachVpnGateway.
    """
    
    vpc_attachment: Optional[AttachVpnGatewayResultVpcAttachment] = dataclasses.field(default=None)
    
