import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeVpcEndpointServicesResult:
    r"""DescribeVpcEndpointServicesResult
    Contains the output of DescribeVpcEndpointServices.
    """
    
    next_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_details: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_names: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
