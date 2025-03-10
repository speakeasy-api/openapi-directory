"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReplaceTransitGatewayRouteRequest:
    
    destination_cidr_block: str = dataclasses.field()  
    transit_gateway_route_table_id: str = dataclasses.field()  
    blackhole: Optional[bool] = dataclasses.field(default=None)  
    dry_run: Optional[bool] = dataclasses.field(default=None)  
    transit_gateway_attachment_id: Optional[str] = dataclasses.field(default=None)  
    