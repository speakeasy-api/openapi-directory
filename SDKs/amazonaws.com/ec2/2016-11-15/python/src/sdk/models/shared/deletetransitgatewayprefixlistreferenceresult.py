import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment:
    r"""DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
    Information about the transit gateway attachment.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference:
    r"""DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
    Information about the deleted prefix list reference.
    """
    
    blackhole: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment: Optional[DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment] = dataclasses.field(default=None)
    transit_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTransitGatewayPrefixListReferenceResult:
    transit_gateway_prefix_list_reference: Optional[DeleteTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference] = dataclasses.field(default=None)
    
