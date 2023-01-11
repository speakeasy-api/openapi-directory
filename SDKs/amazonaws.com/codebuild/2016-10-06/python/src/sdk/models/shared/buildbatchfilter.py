import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import statustype_enum as shared_statustype_enum


@dataclass_json
@dataclasses.dataclass
class BuildBatchFilter:
    r"""BuildBatchFilter
    Specifies filters when retrieving batch builds.
    """
    
    status: Optional[shared_statustype_enum.StatusTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
