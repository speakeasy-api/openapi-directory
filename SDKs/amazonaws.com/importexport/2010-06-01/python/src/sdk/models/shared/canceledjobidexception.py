import dataclasses
from typing import Optional


@dataclasses.dataclass
class CanceledJobIDException:
    r"""CanceledJobIDException
    The specified job ID has been canceled and is no longer valid.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
