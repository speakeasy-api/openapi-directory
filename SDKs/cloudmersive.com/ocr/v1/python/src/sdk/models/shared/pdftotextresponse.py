import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrpageresult as shared_ocrpageresult


@dataclass_json
@dataclasses.dataclass
class PdfToTextResponse:
    r"""PdfToTextResponse
    Response from an OCR to text operation.  Includes the confidence rating and converted text result.
    """
    
    ocr_pages: Optional[list[shared_ocrpageresult.OcrPageResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcrPages') }})
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
