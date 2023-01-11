import dataclasses
from typing import Optional


@dataclasses.dataclass
class DashboardValidationMessage:
    r"""DashboardValidationMessage
    An error or warning for the operation.
    """
    
    data_path: Optional[str] = dataclasses.field(default=None)
    message: Optional[str] = dataclasses.field(default=None)
    
