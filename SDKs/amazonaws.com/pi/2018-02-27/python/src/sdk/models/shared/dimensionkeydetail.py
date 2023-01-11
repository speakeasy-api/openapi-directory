import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import detailstatus_enum as shared_detailstatus_enum


@dataclass_json
@dataclasses.dataclass
class DimensionKeyDetail:
    r"""DimensionKeyDetail
    An object that describes the details for a specified dimension.
    """
    
    dimension: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimension') }})
    status: Optional[shared_detailstatus_enum.DetailStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
