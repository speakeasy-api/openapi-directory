import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pdftolineswithlocationresult as shared_pdftolineswithlocationresult


@dataclasses.dataclass
class PdfOcrPdfToLinesWithLocationHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PdfOcrPdfToLinesWithLocationRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class PdfOcrPdfToLinesWithLocationRequestBody:
    image_file: PdfOcrPdfToLinesWithLocationRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PdfOcrPdfToLinesWithLocationSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PdfOcrPdfToLinesWithLocationRequest:
    headers: PdfOcrPdfToLinesWithLocationHeaders = dataclasses.field()
    request: PdfOcrPdfToLinesWithLocationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPdfToLinesWithLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PdfOcrPdfToLinesWithLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    pdf_to_lines_with_location_result: Optional[shared_pdftolineswithlocationresult.PdfToLinesWithLocationResult] = dataclasses.field(default=None)
    
