import dataclasses
from typing import Optional


@dataclasses.dataclass
class UnableToCancelJobIDException:
    r"""UnableToCancelJobIDException
    AWS Import/Export cannot cancel the job
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    
