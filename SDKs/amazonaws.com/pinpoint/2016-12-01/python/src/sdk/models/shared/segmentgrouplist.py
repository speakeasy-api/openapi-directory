import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentgroup as shared_segmentgroup
from ..shared import include_enum as shared_include_enum


@dataclass_json
@dataclasses.dataclass
class SegmentGroupList:
    r"""SegmentGroupList
    Specifies the settings that define the relationships between segment groups for a segment.
    """
    
    groups: Optional[list[shared_segmentgroup.SegmentGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Groups') }})
    include: Optional[shared_include_enum.IncludeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Include') }})
    
