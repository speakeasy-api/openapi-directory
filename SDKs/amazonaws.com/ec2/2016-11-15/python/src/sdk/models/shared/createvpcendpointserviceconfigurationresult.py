import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDNSNameConfiguration:
    r"""CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDNSNameConfiguration
    Information about the endpoint service private DNS name configuration.
    """
    
    name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    value: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVpcEndpointServiceConfigurationResultServiceConfiguration:
    r"""CreateVpcEndpointServiceConfigurationResultServiceConfiguration
    Information about the service configuration.
    """
    
    acceptance_required: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zones: Optional[dict[str, Any]] = dataclasses.field(default=None)
    base_endpoint_dns_names: Optional[dict[str, Any]] = dataclasses.field(default=None)
    gateway_load_balancer_arns: Optional[dict[str, Any]] = dataclasses.field(default=None)
    manages_vpc_endpoints: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_load_balancer_arns: Optional[dict[str, Any]] = dataclasses.field(default=None)
    private_dns_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    private_dns_name_configuration: Optional[CreateVpcEndpointServiceConfigurationResultServiceConfigurationPrivateDNSNameConfiguration] = dataclasses.field(default=None)
    service_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVpcEndpointServiceConfigurationResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_configuration: Optional[CreateVpcEndpointServiceConfigurationResultServiceConfiguration] = dataclasses.field(default=None)
    
