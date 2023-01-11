import dataclasses
from typing import Optional


@dataclasses.dataclass
class TooManyDistributionCnamEs:
    r"""TooManyDistributionCnamEs
    Your request contains more CNAMEs than are allowed per distribution.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
