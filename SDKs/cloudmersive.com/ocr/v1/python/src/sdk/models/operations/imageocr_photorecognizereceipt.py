import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import receiptrecognitionresult as shared_receiptrecognitionresult


@dataclasses.dataclass
class ImageOcrPhotoRecognizeReceiptHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeReceiptRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeReceiptRequestBody:
    image_file: ImageOcrPhotoRecognizeReceiptRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeReceiptSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeReceiptRequest:
    headers: ImageOcrPhotoRecognizeReceiptHeaders = dataclasses.field()
    request: ImageOcrPhotoRecognizeReceiptRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeReceiptSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeReceiptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    receipt_recognition_result: Optional[shared_receiptrecognitionresult.ReceiptRecognitionResult] = dataclasses.field(default=None)
    
