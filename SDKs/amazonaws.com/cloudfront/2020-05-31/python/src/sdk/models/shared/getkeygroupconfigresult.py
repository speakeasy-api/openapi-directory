import dataclasses
from typing import Optional
from ..shared import keygroupconfig as shared_keygroupconfig


@dataclasses.dataclass
class GetKeyGroupConfigResult:
    key_group_config: Optional[shared_keygroupconfig.KeyGroupConfig] = dataclasses.field(default=None)
    
