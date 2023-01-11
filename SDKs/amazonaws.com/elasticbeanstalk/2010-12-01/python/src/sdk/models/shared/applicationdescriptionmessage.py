import dataclasses
from typing import Optional
from ..shared import applicationdescription as shared_applicationdescription


@dataclasses.dataclass
class ApplicationDescriptionMessage:
    r"""ApplicationDescriptionMessage
    Result message containing a single description of an application.
    """
    
    application: Optional[shared_applicationdescription.ApplicationDescription] = dataclasses.field(default=None)
    
