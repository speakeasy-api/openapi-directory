import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class CreateDhcpOptionsResultDhcpOptions:
    r"""CreateDhcpOptionsResultDhcpOptions
    A set of DHCP options.
    """
    
    dhcp_configurations: Optional[dict[str, Any]] = dataclasses.field(default=None)
    dhcp_options_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    owner_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateDhcpOptionsResult:
    dhcp_options: Optional[CreateDhcpOptionsResultDhcpOptions] = dataclasses.field(default=None)
    
