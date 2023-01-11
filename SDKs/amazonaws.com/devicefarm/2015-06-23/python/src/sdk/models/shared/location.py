import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Location:
    r"""Location
    <p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example, 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>
    """
    
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    
