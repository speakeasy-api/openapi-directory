import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateCustomerGatewayResultCustomerGateway:
    r"""CreateCustomerGatewayResultCustomerGateway
    Information about the customer gateway.
    """
    
    bgp_asn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    certificate_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    device_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ip_address: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateCustomerGatewayResult:
    r"""CreateCustomerGatewayResult
    Contains the output of CreateCustomerGateway.
    """
    
    customer_gateway: Optional[CreateCustomerGatewayResultCustomerGateway] = dataclasses.field(default=None)
    
