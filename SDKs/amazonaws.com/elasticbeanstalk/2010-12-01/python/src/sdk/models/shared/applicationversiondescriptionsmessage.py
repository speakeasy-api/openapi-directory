import dataclasses
from typing import Optional
from ..shared import applicationversiondescription as shared_applicationversiondescription


@dataclasses.dataclass
class ApplicationVersionDescriptionsMessage:
    r"""ApplicationVersionDescriptionsMessage
    Result message wrapping a list of application version descriptions.
    """
    
    application_versions: Optional[list[shared_applicationversiondescription.ApplicationVersionDescription]] = dataclasses.field(default=None)
    next_token: Optional[str] = dataclasses.field(default=None)
    
