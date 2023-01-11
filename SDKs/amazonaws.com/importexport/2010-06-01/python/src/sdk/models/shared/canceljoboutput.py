import dataclasses
from typing import Optional


@dataclasses.dataclass
class CancelJobOutput:
    r"""CancelJobOutput
    Output structure for the CancelJob operation.
    """
    
    success: Optional[bool] = dataclasses.field(default=None)
    
