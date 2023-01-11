import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrlineelement as shared_ocrlineelement


@dataclass_json
@dataclasses.dataclass
class ImageToLinesWithLocationResult:
    r"""ImageToLinesWithLocationResult
    Result of an image to lines-with-location OCR operation
    """
    
    lines: Optional[list[shared_ocrlineelement.OcrLineElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Lines') }})
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
