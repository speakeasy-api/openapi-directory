import dataclasses
from typing import Optional


@dataclasses.dataclass
class NetworkInterfaceList:
    r"""NetworkInterfaceList
    Describes a network interface. 
    """
    
    availability_zone: Optional[str] = dataclasses.field(default=None)
    network_interface_id: Optional[str] = dataclasses.field(default=None)
    private_ip_address: Optional[str] = dataclasses.field(default=None)
    subnet_id: Optional[str] = dataclasses.field(default=None)
    
