import dataclasses
from typing import Optional
from ..shared import environmentdescription as shared_environmentdescription


@dataclasses.dataclass
class EnvironmentDescriptionsMessage:
    r"""EnvironmentDescriptionsMessage
    Result message containing a list of environment descriptions.
    """
    
    environments: Optional[list[shared_environmentdescription.EnvironmentDescription]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
