import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import point as shared_point


@dataclass_json
@dataclasses.dataclass
class OcrPhotoTextElement:
    r"""OcrPhotoTextElement
    A single text in an OCR document
    """
    
    bounding_points: Optional[list[shared_point.Point]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingPoints') }})
    confidence_level: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfidenceLevel') }})
    height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Height') }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Text') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Width') }})
    x_left: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('XLeft') }})
    y_top: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YTop') }})
    
