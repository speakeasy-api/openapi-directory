import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import confidencelevel_enum as shared_confidencelevel_enum


@dataclass_json
@dataclasses.dataclass
class ViolationEventAdditionalInfo:
    r"""ViolationEventAdditionalInfo
     The details of a violation event. 
    """
    
    confidence_level: Optional[shared_confidencelevel_enum.ConfidenceLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidenceLevel') }})
    
