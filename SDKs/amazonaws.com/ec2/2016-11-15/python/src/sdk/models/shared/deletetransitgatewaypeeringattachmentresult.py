import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo:
    r"""DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo
    Information about the accepter transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo:
    r"""DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo
    Information about the requester transit gateway.
    """
    
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    region: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus:
    r"""DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus
    The status of the transit gateway peering attachment.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment:
    r"""DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment
    The transit gateway peering attachment.
    """
    
    accepter_tgw_info: Optional[DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentAccepterTgwInfo] = dataclasses.field(default=None)
    creation_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_tgw_info: Optional[DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentRequesterTgwInfo] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachmentStatus] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayPeeringAttachmentResult:
    transit_gateway_peering_attachment: Optional[DeleteTransitGatewayPeeringAttachmentResultTransitGatewayPeeringAttachment] = dataclasses.field(default=None)
    
