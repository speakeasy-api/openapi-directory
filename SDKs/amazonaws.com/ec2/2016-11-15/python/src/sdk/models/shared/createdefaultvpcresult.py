import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateDefaultVpcResultVpc:
    r"""CreateDefaultVpcResultVpc
    Information about the VPC.
    """
    
    cidr_block: Optional[dict[str, Any]] = dataclasses.field(default=None)
    cidr_block_association_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dhcp_options_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    instance_tenancy: Optional[dict[str, Any]] = dataclasses.field(default=None)
    ipv6_cidr_block_association_set: Optional[dict[str, Any]] = dataclasses.field(default=None)
    is_default: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDefaultVpcResult:
    vpc: Optional[CreateDefaultVpcResultVpc] = dataclasses.field(default=None)
    
