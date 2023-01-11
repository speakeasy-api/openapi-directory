import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrpageresultwithlineswithlocation as shared_ocrpageresultwithlineswithlocation


@dataclass_json
@dataclasses.dataclass
class PdfToLinesWithLocationResult:
    r"""PdfToLinesWithLocationResult
    Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
    """
    
    ocr_pages: Optional[list[shared_ocrpageresultwithlineswithlocation.OcrPageResultWithLinesWithLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcrPages') }})
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
