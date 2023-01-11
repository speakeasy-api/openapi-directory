import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class LegGeometry:
    r"""LegGeometry
    Contains the geometry details for each path between a pair of positions. Used in plotting a route leg on a map.
    """
    
    line_string: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineString') }})
    
