import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import geometry as shared_geometry


@dataclass_json
@dataclasses.dataclass
class ExpenseDetection:
    r"""ExpenseDetection
    An object used to store information about the Value or Label detected by Amazon Textract.
    """
    
    confidence: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    geometry: Optional[shared_geometry.Geometry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    
