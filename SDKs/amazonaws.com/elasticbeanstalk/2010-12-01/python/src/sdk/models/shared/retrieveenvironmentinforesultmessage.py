import dataclasses
from typing import Optional
from ..shared import environmentinfodescription as shared_environmentinfodescription


@dataclasses.dataclass
class RetrieveEnvironmentInfoResultMessage:
    r"""RetrieveEnvironmentInfoResultMessage
    Result message containing a description of the requested environment info.
    """
    
    environment_info: Optional[list[shared_environmentinfodescription.EnvironmentInfoDescription]] = dataclasses.field(default=None)
    
