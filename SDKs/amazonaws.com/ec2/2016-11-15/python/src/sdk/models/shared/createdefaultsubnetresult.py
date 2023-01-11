import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateDefaultSubnetResultSubnet:
    r"""CreateDefaultSubnetResultSubnet
    Information about the subnet.
    """
    
    assign_ipv6_address_on_creation: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zone: Optional[dict[str, Any]] = dataclasses.field(default=None)
    availability_zone_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    available_ip_address_count: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    customer_owned_ipv4_pool: Optional[dict[str, Any]] = dataclasses.field(default=None)
    default_for_az: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_association_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    map_customer_owned_ip_on_launch: Optional[dict[str, Any]] = dataclasses.field(default=None)
    map_public_ip_on_launch: Optional[dict[str, Any]] = dataclasses.field(default=None)
    outpost_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_arn: Optional[dict[str, Any]] = dataclasses.field(default=None)
    subnet_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDefaultSubnetResult:
    subnet: Optional[CreateDefaultSubnetResultSubnet] = dataclasses.field(default=None)
    
