import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment:
    r"""ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment
    Information about the transit gateway attachment.
    """
    
    resource_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference:
    r"""ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference
    Information about the prefix list reference.
    """
    
    blackhole: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    prefix_list_owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transit_gateway_attachment: Optional[ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReferenceTransitGatewayAttachment] = dataclasses.field(default=None)
    transit_gateway_route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ModifyTransitGatewayPrefixListReferenceResult:
    transit_gateway_prefix_list_reference: Optional[ModifyTransitGatewayPrefixListReferenceResultTransitGatewayPrefixListReference] = dataclasses.field(default=None)
    
