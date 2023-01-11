import dataclasses
from typing import Optional
from ..shared import keygroup as shared_keygroup


@dataclasses.dataclass
class GetKeyGroupResult:
    key_group: Optional[shared_keygroup.KeyGroup] = dataclasses.field(default=None)
    
