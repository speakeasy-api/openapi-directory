import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import landmarktype_enum as shared_landmarktype_enum


@dataclass_json
@dataclasses.dataclass
class Landmark:
    r"""Landmark
    Indicates the location of the landmark on the face.
    """
    
    type: Optional[shared_landmarktype_enum.LandmarkTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    x: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('X') }})
    y: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Y') }})
    
