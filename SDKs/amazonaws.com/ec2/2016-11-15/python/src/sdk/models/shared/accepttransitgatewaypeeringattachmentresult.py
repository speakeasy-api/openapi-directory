import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo:
    r"""AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
    Information about the accepter transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo:
    r"""AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
    Information about the requester transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus:
    r"""AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
    The status of the transit gateway peering attachment.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment:
    r"""AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
    The transit gateway peering attachment.
    """
    
    accepter_tgw_info: Optional[AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo] = dataclasses.field(default=None)
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_tgw_info: Optional[AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AcceptTransitGatewayPeeringAttachmentResult:
    transit_gateway_peering_attachment: Optional[AcceptTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment] = dataclasses.field(default=None)
    
