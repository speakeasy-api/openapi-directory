import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrwordelement as shared_ocrwordelement


@dataclass_json
@dataclasses.dataclass
class OcrLineElement:
    r"""OcrLineElement
    A contiguous line of text in an OCR document
    """
    
    line_text: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineText') }})
    words: Optional[list[shared_ocrwordelement.OcrWordElement]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Words') }})
    
