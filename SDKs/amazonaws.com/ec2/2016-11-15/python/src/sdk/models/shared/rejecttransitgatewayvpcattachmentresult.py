import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions:
    r"""RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
    The VPC attachment options.
    """
    
    appliance_mode_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dns_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment:
    r"""RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
    Information about the attachment.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayVpcAttachmentResult:
    transit_gateway_vpc_attachment: Optional[RejectTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment] = dataclasses.field(default=None)
    
