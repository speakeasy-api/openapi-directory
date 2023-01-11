import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateNatGatewayResultNatGatewayProvisionedBandwidth:
    r"""CreateNatGatewayResultNatGatewayProvisionedBandwidth
    Reserved. If you need to sustain traffic greater than the <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html\">documented limits</a>, contact us through the <a href=\"https://console.aws.amazon.com/support/home?\">Support Center</a>.
    """
    
    provision_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    provisioned: Optional[dict[str, Any]] = dataclasses.field(default=None)
    request_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requested: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNatGatewayResultNatGateway:
    r"""CreateNatGatewayResultNatGateway
    Information about the NAT gateway.
    """
    
    connectivity_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    create_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    delete_time: Optional[dict[str, Any]] = dataclasses.field(default=None)
    failure_code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    failure_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    nat_gateway_addresses: Optional[dict[str, Any]] = dataclasses.field(default=None)
    nat_gateway_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    provisioned_bandwidth: Optional[CreateNatGatewayResultNatGatewayProvisionedBandwidth] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNatGatewayResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    nat_gateway: Optional[CreateNatGatewayResultNatGateway] = dataclasses.field(default=None)
    
