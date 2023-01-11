import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo:
    r"""RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
    Information about the accepter transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo:
    r"""RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
    Information about the requester transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus:
    r"""RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
    The status of the transit gateway peering attachment.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment:
    r"""RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
    The transit gateway peering attachment.
    """
    
    accepter_tgw_info: Optional[RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo] = dataclasses.field(default=None)
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_tgw_info: Optional[RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class RejectTransitGatewayPeeringAttachmentResult:
    transit_gateway_peering_attachment: Optional[RejectTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment] = dataclasses.field(default=None)
    
