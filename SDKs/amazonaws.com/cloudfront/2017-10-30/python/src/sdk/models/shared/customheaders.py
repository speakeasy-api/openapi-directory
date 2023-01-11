import dataclasses
from typing import Optional
from ..shared import origincustomheaderslist as shared_origincustomheaderslist


@dataclasses.dataclass
class CustomHeaders:
    r"""CustomHeaders
    A complex type that contains the list of Custom Headers for each origin. 
    """
    
    quantity: int = dataclasses.field()
    items: Optional[list[shared_origincustomheaderslist.OriginCustomHeadersList]] = dataclasses.field(default=None)
    
