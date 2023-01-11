import dataclasses
from typing import Optional
from ..shared import origingrouplist as shared_origingrouplist


@dataclasses.dataclass
class OriginGroups:
    r"""OriginGroups
    A complex data type for the origin groups specified for a distribution.
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_origingrouplist.OriginGroupList]] = dataclasses.field(default=None)
    
