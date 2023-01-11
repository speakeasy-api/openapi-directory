import dataclasses
from typing import Optional


@dataclasses.dataclass
class SupportedOperationList:
    r"""SupportedOperationList
    Describes the operations that are allowed on a maintenance track.
    """
    
    operation_name: Optional[str] = dataclasses.field(default=None)
    
