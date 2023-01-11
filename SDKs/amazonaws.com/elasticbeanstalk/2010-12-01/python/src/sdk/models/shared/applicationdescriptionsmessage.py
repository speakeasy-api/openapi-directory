import dataclasses
from typing import Optional
from ..shared import applicationdescription as shared_applicationdescription


@dataclasses.dataclass
class ApplicationDescriptionsMessage:
    r"""ApplicationDescriptionsMessage
    Result message containing a list of application descriptions.
    """
    
    applications: Optional[list[shared_applicationdescription.ApplicationDescription]] = dataclasses.field(default=None)
    
