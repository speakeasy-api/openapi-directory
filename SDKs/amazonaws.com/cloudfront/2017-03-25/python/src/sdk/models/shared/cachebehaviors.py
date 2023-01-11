import dataclasses
from typing import Optional
from ..shared import cachebehaviorlist as shared_cachebehaviorlist


@dataclasses.dataclass
class CacheBehaviors:
    r"""CacheBehaviors
    A complex type that contains zero or more <code>CacheBehavior</code> elements. 
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_cachebehaviorlist.CacheBehaviorList]] = dataclasses.field(default=None)
    
