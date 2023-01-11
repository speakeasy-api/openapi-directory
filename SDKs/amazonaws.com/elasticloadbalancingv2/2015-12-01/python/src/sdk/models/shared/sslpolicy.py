import dataclasses
from typing import Optional
from ..shared import cipher as shared_cipher


@dataclasses.dataclass
class SslPolicy:
    r"""SslPolicy
    Information about a policy used for SSL negotiation.
    """
    
    ciphers: Optional[list[shared_cipher.Cipher]] = dataclasses.field(default=None)
    name: Optional[str] = dataclasses.field(default=None)
    ssl_protocols: Optional[list[str]] = dataclasses.field(default=None)
    
