import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeRouteTablesResult:
    r"""DescribeRouteTablesResult
    Contains the output of DescribeRouteTables.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    route_tables: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
