import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcEndpointServiceConfigurationsResult:
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_configurations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
