import dataclasses
from typing import Optional


@dataclasses.dataclass
class PreconditionFailed:
    r"""PreconditionFailed
    The precondition given in one or more of the request-header fields evaluated to <code>false</code>. 
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
