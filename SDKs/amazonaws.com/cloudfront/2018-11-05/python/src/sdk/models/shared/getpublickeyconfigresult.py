import dataclasses
from typing import Optional
from ..shared import publickeyconfig as shared_publickeyconfig


@dataclasses.dataclass
class GetPublicKeyConfigResult:
    public_key_config: Optional[shared_publickeyconfig.PublicKeyConfig] = dataclasses.field(default=None)
    
