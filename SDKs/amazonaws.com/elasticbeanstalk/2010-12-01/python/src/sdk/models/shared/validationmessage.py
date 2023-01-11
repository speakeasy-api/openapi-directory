import dataclasses
from typing import Optional
from enum import Enum
from ..shared import validationseverity_enum as shared_validationseverity_enum


@dataclasses.dataclass
class ValidationMessage:
    r"""ValidationMessage
    An error or warning for a desired configuration option value.
    """
    
    message: Optional[str] = dataclasses.field(default=None)
    namespace: Optional[str] = dataclasses.field(default=None)
    option_name: Optional[str] = dataclasses.field(default=None)
    severity: Optional[shared_validationseverity_enum.ValidationSeverityEnum] = dataclasses.field(default=None)
    
