import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import knowngendertype_enum as shared_knowngendertype_enum


@dataclass_json
@dataclasses.dataclass
class KnownGender:
    r"""KnownGender
    The known gender identity for the celebrity that matches the provided ID.
    """
    
    type: Optional[shared_knowngendertype_enum.KnownGenderTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
