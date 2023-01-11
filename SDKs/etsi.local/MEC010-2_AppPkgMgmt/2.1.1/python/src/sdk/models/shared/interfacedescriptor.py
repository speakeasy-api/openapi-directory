import dataclasses
from typing import Optional
from enum import Enum
from ..shared import interfacetype_enum as shared_interfacetype_enum
from ..shared import tunnelinfo as shared_tunnelinfo


@dataclasses.dataclass
class InterfaceDescriptor:
    interface_type: shared_interfacetype_enum.InterfaceTypeEnum = dataclasses.field()
    dst_ip_address: Optional[str] = dataclasses.field(default=None)
    dst_mac_address: Optional[str] = dataclasses.field(default=None)
    src_mac_address: Optional[str] = dataclasses.field(default=None)
    tunnel_info: Optional[shared_tunnelinfo.TunnelInfo] = dataclasses.field(default=None)
    
