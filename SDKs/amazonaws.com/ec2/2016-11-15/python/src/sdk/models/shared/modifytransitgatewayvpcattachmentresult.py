import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions:
    r"""ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions
    The VPC attachment options.
    """
    
    appliance_mode_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dns_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_support: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment:
    r"""ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment
    Information about the modified attachment.
    """
    
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    options: Optional[ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachmentOptions] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTransitGatewayVpcAttachmentResult:
    transit_gateway_vpc_attachment: Optional[ModifyTransitGatewayVpcAttachmentResultTransitGatewayVpcAttachment] = dataclasses.field(default=None)
    
