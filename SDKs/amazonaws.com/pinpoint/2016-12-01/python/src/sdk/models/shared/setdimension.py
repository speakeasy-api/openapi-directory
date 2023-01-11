import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensiontype_enum as shared_dimensiontype_enum


@dataclass_json
@dataclasses.dataclass
class SetDimension:
    r"""SetDimension
    Specifies the dimension type and values for a segment dimension.
    """
    
    values: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    dimension_type: Optional[shared_dimensiontype_enum.DimensionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DimensionType') }})
    
