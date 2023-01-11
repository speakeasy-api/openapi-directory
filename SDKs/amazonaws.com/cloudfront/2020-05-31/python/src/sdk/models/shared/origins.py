import dataclasses
from ..shared import originlist as shared_originlist


@dataclasses.dataclass
class Origins:
    r"""Origins
    Contains information about the origins for this distribution.
    """
    
    items: list[shared_originlist.OriginList] = dataclasses.field()
    quantity: int = dataclasses.field()
    
