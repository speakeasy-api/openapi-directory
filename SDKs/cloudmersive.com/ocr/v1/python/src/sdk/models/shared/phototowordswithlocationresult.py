import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrphototextelement as shared_ocrphototextelement


@dataclass_json
@dataclasses.dataclass
class PhotoToWordsWithLocationResult:
    r"""PhotoToWordsWithLocationResult
    Result of an photo to words-with-location OCR operation
    """
    
    diagnostic_image: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DiagnosticImage') }})
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    text_elements: Optional[list[shared_ocrphototextelement.OcrPhotoTextElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TextElements') }})
    
