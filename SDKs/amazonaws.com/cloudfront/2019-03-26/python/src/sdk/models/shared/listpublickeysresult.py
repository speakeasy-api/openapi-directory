import dataclasses
from typing import Optional
from ..shared import publickeylist as shared_publickeylist


@dataclasses.dataclass
class ListPublicKeysResult:
    public_key_list: Optional[shared_publickeylist.PublicKeyList] = dataclasses.field(default=None)
    
