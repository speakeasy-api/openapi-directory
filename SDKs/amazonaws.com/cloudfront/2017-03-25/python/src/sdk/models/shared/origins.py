import dataclasses
from typing import Optional
from ..shared import originlist as shared_originlist


@dataclasses.dataclass
class Origins:
    r"""Origins
    A complex type that contains information about origins for this distribution. 
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_originlist.OriginList]] = dataclasses.field(default=None)
    
