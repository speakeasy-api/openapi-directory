import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidNextToken:
    r"""InvalidNextToken
    The specified NextToken is not valid. 
    """
    
    box_usage: Optional[float] = dataclasses.field(default=None)
    
