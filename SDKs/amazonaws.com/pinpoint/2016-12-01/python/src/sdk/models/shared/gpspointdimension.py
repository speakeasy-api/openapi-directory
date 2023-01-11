import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gpscoordinates as shared_gpscoordinates


@dataclass_json
@dataclasses.dataclass
class GpsPointDimension:
    r"""GpsPointDimension
    Specifies GPS-based criteria for including or excluding endpoints from a segment.
    """
    
    coordinates: shared_gpscoordinates.GpsCoordinates = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Coordinates') }})
    range_in_kilometers: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RangeInKilometers') }})
    
