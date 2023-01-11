import dataclasses
from typing import Optional
from ..shared import keygrouplist as shared_keygrouplist


@dataclasses.dataclass
class ListKeyGroupsResult:
    key_group_list: Optional[shared_keygrouplist.KeyGroupList] = dataclasses.field(default=None)
    
