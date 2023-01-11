import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GeofenceGeometry:
    r"""GeofenceGeometry
    <p>Contains the geofence geometry details.</p> <note> <p>Amazon Location doesn't currently support polygons with holes, multipolygons, polygons that are wound clockwise, or that cross the antimeridian. </p> </note>
    """
    
    polygon: Optional[list[list[list[float]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Polygon') }})
    
