import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GpsCoordinates:
    r"""GpsCoordinates
    Specifies the GPS coordinates of a location.
    """
    
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Longitude') }})
    
