import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ocrpageresultwithwordswithlocation as shared_ocrpageresultwithwordswithlocation


@dataclass_json
@dataclasses.dataclass
class PdfToWordsWithLocationResult:
    r"""PdfToWordsWithLocationResult
    Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
    """
    
    ocr_pages: Optional[list[shared_ocrpageresultwithwordswithlocation.OcrPageResultWithWordsWithLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OcrPages') }})
    successful: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Successful') }})
    
