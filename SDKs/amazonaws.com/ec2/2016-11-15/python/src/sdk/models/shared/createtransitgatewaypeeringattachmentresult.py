import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo:
    r"""CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
    Information about the accepter transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo:
    r"""CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
    Information about the requester transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus:
    r"""CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
    The status of the transit gateway peering attachment.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment:
    r"""CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
    The transit gateway peering attachment.
    """
    
    accepter_tgw_info: Optional[CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo] = dataclasses.field(default=None)
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_tgw_info: Optional[CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTransitGatewayPeeringAttachmentResult:
    transit_gateway_peering_attachment: Optional[CreateTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment] = dataclasses.field(default=None)
    
