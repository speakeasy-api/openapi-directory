import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateNetworkACLResultNetworkACL:
    r"""CreateNetworkACLResultNetworkACL
    Information about the network ACL.
    """
    
    associations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    entries: Optional[dict[str, Any]] = dataclasses.field(default=None)
    is_default: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_acl_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vpc_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNetworkACLResult:
    network_acl: Optional[CreateNetworkACLResultNetworkACL] = dataclasses.field(default=None)
    
