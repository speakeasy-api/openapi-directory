import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import boundingbox as shared_boundingbox
from ..shared import point as shared_point


@dataclass_json
@dataclasses.dataclass
class Geometry:
    r"""Geometry
    Information about where the following items are located on a document page: detected page, text, key-value pairs, tables, table cells, and selection elements.
    """
    
    bounding_box: Optional[shared_boundingbox.BoundingBox] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    polygon: Optional[list[shared_point.Point]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Polygon') }})
    
