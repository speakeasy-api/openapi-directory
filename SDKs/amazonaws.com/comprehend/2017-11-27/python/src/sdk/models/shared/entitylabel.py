import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import piientitytype_enum as shared_piientitytype_enum


@dataclass_json
@dataclasses.dataclass
class EntityLabel:
    r"""EntityLabel
    Specifies one of the label or labels that categorize the personally identifiable information (PII) entity being analyzed.
    """
    
    name: Optional[shared_piientitytype_enum.PiiEntityTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    
