import dataclasses
from typing import Optional
from ..shared import environmentresourcedescription as shared_environmentresourcedescription


@dataclasses.dataclass
class EnvironmentResourceDescriptionsMessage:
    r"""EnvironmentResourceDescriptionsMessage
    Result message containing a list of environment resource descriptions.
    """
    
    environment_resources: Optional[shared_environmentresourcedescription.EnvironmentResourceDescription] = dataclasses.field(default=None)
    
