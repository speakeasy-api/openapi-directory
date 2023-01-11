import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import pdftotextresponse as shared_pdftotextresponse


@dataclasses.dataclass
class PdfOcrPostHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PdfOcrPostRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class PdfOcrPostRequestBody:
    image_file: PdfOcrPostRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PdfOcrPostSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PdfOcrPostRequest:
    headers: PdfOcrPostHeaders = dataclasses.field()
    request: PdfOcrPostRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: PdfOcrPostSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PdfOcrPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    pdf_to_text_response: Optional[shared_pdftotextresponse.PdfToTextResponse] = dataclasses.field(default=None)
    
