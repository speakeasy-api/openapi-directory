import dataclasses
from ..shared import originlist as shared_originlist


@dataclasses.dataclass
class Origins:
    r"""Origins
    A complex type that contains information about origins and origin groups for this distribution. 
    """
    
    items: list[shared_originlist.OriginList] = dataclasses.field()
    quantity: int = dataclasses.field()
    
