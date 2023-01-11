import dataclasses
from typing import Optional
from ..shared import validationmessage as shared_validationmessage


@dataclasses.dataclass
class ConfigurationSettingsValidationMessages:
    r"""ConfigurationSettingsValidationMessages
    Provides a list of validation messages.
    """
    
    messages: Optional[list[shared_validationmessage.ValidationMessage]] = dataclasses.field(default=None)
    
