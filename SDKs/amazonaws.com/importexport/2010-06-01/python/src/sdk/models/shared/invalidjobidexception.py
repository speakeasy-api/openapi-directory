import dataclasses
from typing import Optional


@dataclasses.dataclass
class InvalidJobIDException:
    r"""InvalidJobIDException
    The JOBID was missing, not found, or not associated with the AWS account.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
