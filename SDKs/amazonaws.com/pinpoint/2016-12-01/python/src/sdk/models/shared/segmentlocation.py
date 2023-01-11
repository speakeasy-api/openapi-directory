import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import setdimension as shared_setdimension
from ..shared import gpspointdimension as shared_gpspointdimension


@dataclass_json
@dataclasses.dataclass
class SegmentLocation:
    r"""SegmentLocation
    Specifies geographical dimension settings for a segment.
    """
    
    country: Optional[shared_setdimension.SetDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    gps_point: Optional[shared_gpspointdimension.GpsPointDimension] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GPSPoint') }})
    
