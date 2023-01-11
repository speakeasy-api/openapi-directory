import dataclasses
from typing import Optional


@dataclasses.dataclass
class TrafficFilter:
    d_scp: Optional[int] = dataclasses.field(default=None)
    dst_address: Optional[list[str]] = dataclasses.field(default=None)
    dst_port: Optional[list[str]] = dataclasses.field(default=None)
    dst_tunnel_port: Optional[list[str]] = dataclasses.field(default=None)
    protocol: Optional[list[str]] = dataclasses.field(default=None)
    q_ci: Optional[int] = dataclasses.field(default=None)
    src_address: Optional[list[str]] = dataclasses.field(default=None)
    src_port: Optional[list[str]] = dataclasses.field(default=None)
    src_tunnel_address: Optional[list[str]] = dataclasses.field(default=None)
    src_tunnel_port: Optional[list[str]] = dataclasses.field(default=None)
    t_c: Optional[int] = dataclasses.field(default=None)
    tag: Optional[list[str]] = dataclasses.field(default=None)
    tgt_tunnel_address: Optional[list[str]] = dataclasses.field(default=None)
    
