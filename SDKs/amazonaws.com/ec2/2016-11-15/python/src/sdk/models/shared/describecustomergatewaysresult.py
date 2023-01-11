import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DescribeCustomerGatewaysResult:
    r"""DescribeCustomerGatewaysResult
    Contains the output of DescribeCustomerGateways.
    """
    
    customer_gateways: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
