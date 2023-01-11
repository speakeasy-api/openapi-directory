import dataclasses
from typing import Optional
from ..shared import invalidationlist as shared_invalidationlist


@dataclasses.dataclass
class ListInvalidationsResult:
    r"""ListInvalidationsResult
    The returned result of the corresponding request. 
    """
    
    invalidation_list: Optional[shared_invalidationlist.InvalidationList] = dataclasses.field(default=None)
    
