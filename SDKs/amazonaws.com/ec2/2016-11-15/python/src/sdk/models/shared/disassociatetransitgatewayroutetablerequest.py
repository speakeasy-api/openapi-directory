"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class DisassociateTransitGatewayRouteTableRequest:
    
    transit_gateway_attachment_id: str = dataclasses.field()  
    transit_gateway_route_table_id: str = dataclasses.field()  
    dry_run: Optional[bool] = dataclasses.field(default=None)  
    