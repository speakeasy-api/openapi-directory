import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geometry as shared_geometry


@dataclass_json
@dataclasses.dataclass
class CustomLabel:
    r"""CustomLabel
    A custom label detected in an image by a call to <a>DetectCustomLabels</a>.
    """
    
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    geometry: Optional[shared_geometry.Geometry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    
