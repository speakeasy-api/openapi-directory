import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidProtocolSettings:
    r"""InvalidProtocolSettings
    You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support Server Name Indication (SNI).
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
