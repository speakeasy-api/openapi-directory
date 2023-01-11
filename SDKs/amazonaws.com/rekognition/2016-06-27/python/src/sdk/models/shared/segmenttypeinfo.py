import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import segmenttype_enum as shared_segmenttype_enum


@dataclass_json
@dataclasses.dataclass
class SegmentTypeInfo:
    r"""SegmentTypeInfo
    Information about the type of a segment requested in a call to <a>StartSegmentDetection</a>. An array of <code>SegmentTypeInfo</code> objects is returned by the response from <a>GetSegmentDetection</a>.
    """
    
    model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelVersion') }})
    type: Optional[shared_segmenttype_enum.SegmentTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
