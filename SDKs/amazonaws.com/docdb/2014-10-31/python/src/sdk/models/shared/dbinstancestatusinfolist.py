import dataclasses
from typing import Optional


@dataclasses.dataclass
class DbInstanceStatusInfoList:
    r"""DbInstanceStatusInfoList
    Provides a list of status information for an instance.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    normal: Optional[bool] = dataclasses.field(default=None)
    status: Optional[str] = dataclasses.field(default=None)
    status_type: Optional[str] = dataclasses.field(default=None)
    
