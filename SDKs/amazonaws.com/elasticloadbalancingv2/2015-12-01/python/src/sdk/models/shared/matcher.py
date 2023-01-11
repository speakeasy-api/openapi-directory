import dataclasses
from typing import Optional


@dataclasses.dataclass
class Matcher:
    r"""Matcher
    The codes to use when checking for a successful response from a target. If the protocol version is gRPC, these are gRPC codes. Otherwise, these are HTTP codes.
    """
    
    grpc_code: Optional[str] = dataclasses.field(default=None)
    http_code: Optional[str] = dataclasses.field(default=None)
    
