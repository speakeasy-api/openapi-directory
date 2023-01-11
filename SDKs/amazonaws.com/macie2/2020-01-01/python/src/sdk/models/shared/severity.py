import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import severitydescription_enum as shared_severitydescription_enum


@dataclass_json
@dataclasses.dataclass
class Severity:
    r"""Severity
    Provides the numerical and qualitative representations of a finding's severity.
    """
    
    description: Optional[shared_severitydescription_enum.SeverityDescriptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    score: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
