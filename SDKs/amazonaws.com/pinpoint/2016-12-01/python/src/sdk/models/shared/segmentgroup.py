import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmentdimensions as shared_segmentdimensions
from ..shared import segmentreference as shared_segmentreference
from ..shared import sourcetype_enum as shared_sourcetype_enum
from ..shared import type_enum as shared_type_enum


@dataclass_json
@dataclasses.dataclass
class SegmentGroup:
    r"""SegmentGroup
    Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
    """
    
    dimensions: Optional[list[shared_segmentdimensions.SegmentDimensions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    source_segments: Optional[list[shared_segmentreference.SegmentReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceSegments') }})
    source_type: Optional[shared_sourcetype_enum.SourceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    type: Optional[shared_type_enum.TypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
