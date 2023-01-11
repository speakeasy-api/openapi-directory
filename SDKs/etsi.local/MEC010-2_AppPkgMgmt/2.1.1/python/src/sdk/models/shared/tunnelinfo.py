import dataclasses
from typing import Optional
from enum import Enum
from ..shared import tunneltype_enum as shared_tunneltype_enum


@dataclasses.dataclass
class TunnelInfo:
    tunnel_dst_address: str = dataclasses.field()
    tunnel_src_address: str = dataclasses.field()
    tunnel_type: shared_tunneltype_enum.TunnelTypeEnum = dataclasses.field()
    tunnel_specific_data: Optional[str] = dataclasses.field(default=None)
    
