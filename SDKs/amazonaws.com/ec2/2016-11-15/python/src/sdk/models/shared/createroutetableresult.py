import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateRouteTableResultRouteTable:
    r"""CreateRouteTableResultRouteTable
    Information about the route table.
    """
    
    associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    propagating_vgws: Optional[dict[str, Any]] = dataclasses.field(default=None)
    route_table_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    routes: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateRouteTableResult:
    route_table: Optional[CreateRouteTableResultRouteTable] = dataclasses.field(default=None)
    
