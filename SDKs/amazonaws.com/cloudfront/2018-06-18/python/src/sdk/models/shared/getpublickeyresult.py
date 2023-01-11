import dataclasses
from typing import Optional
from ..shared import publickey as shared_publickey


@dataclasses.dataclass
class GetPublicKeyResult:
    public_key: Optional[shared_publickey.PublicKey] = dataclasses.field(default=None)
    
