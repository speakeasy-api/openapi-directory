import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrwordelement as shared_ocrwordelement


@dataclass_json
@dataclasses.dataclass
class ImageToWordsWithLocationResult:
    r"""ImageToWordsWithLocationResult
    Result of an image to words-with-location OCR operation
    """
    
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    words: Optional[list[shared_ocrwordelement.OcrWordElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
