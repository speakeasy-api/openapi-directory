import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pdftowordswithlocationresult as shared_pdftowordswithlocationresult


@dataclasses.dataclass
class PdfOcrPdfToWordsWithLocationHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PdfOcrPdfToWordsWithLocationRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class PdfOcrPdfToWordsWithLocationRequestBody:
    image_file: PdfOcrPdfToWordsWithLocationRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PdfOcrPdfToWordsWithLocationSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PdfOcrPdfToWordsWithLocationRequest:
    headers: PdfOcrPdfToWordsWithLocationHeaders = dataclasses.field()
    request: PdfOcrPdfToWordsWithLocationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPdfToWordsWithLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PdfOcrPdfToWordsWithLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    pdf_to_words_with_location_result: Optional[shared_pdftowordswithlocationresult.PdfToWordsWithLocationResult] = dataclasses.field(default=None)
    
