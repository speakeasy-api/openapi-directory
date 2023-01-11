import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statusvalues_enum as shared_statusvalues_enum


@dataclass_json
@dataclasses.dataclass
class OperationStatusFilter:
    r"""OperationStatusFilter
    Filters he operation status list based on the passed attribute value.
    """
    
    status: Optional[shared_statusvalues_enum.StatusValuesEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
