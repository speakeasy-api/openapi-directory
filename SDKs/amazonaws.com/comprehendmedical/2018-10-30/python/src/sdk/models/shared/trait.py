import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import attributename_enum as shared_attributename_enum


@dataclass_json
@dataclasses.dataclass
class Trait:
    r"""Trait
     Provides contextual information about the extracted entity. 
    """
    
    name: Optional[shared_attributename_enum.AttributeNameEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    score: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Score') }})
    
