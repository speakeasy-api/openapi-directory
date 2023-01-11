import dataclasses
from typing import Optional
from ..shared import applicationversiondescription as shared_applicationversiondescription


@dataclasses.dataclass
class ApplicationVersionDescriptionMessage:
    r"""ApplicationVersionDescriptionMessage
    Result message wrapping a single description of an application version.
    """
    
    application_version: Optional[shared_applicationversiondescription.ApplicationVersionDescription] = dataclasses.field(default=None)
    
