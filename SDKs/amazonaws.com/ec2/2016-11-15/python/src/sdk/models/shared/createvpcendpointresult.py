import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateVpcEndpointResultVpcEndpointLastError:
    r"""CreateVpcEndpointResultVpcEndpointLastError
    The last error that occurred for VPC endpoint.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVpcEndpointResultVpcEndpoint:
    r"""CreateVpcEndpointResultVpcEndpoint
    Information about the endpoint.
    """
    
    creation_timestamp: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dns_entries: Optional[dict[str, Any]] = dataclasses.field(default=None)
    groups: Optional[dict[str, Any]] = dataclasses.field(default=None)
    last_error: Optional[CreateVpcEndpointResultVpcEndpointLastError] = dataclasses.field(default=None)
    network_interface_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    policy_document: Optional[dict[str, Any]] = dataclasses.field(default=None)
    private_dns_enabled: Optional[dict[str, Any]] = dataclasses.field(default=None)
    requester_managed: Optional[dict[str, Any]] = dataclasses.field(default=None)
    route_table_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    service_name: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_ids: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_endpoint_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_endpoint_type: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateVpcEndpointResult:
    r"""CreateVpcEndpointResult
    Contains the output of CreateVpcEndpoint.
    """
    
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_endpoint: Optional[CreateVpcEndpointResultVpcEndpoint] = dataclasses.field(default=None)
    
