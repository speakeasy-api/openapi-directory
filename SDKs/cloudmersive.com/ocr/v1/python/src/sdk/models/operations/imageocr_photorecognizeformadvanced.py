import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import formrecognitionresult as shared_formrecognitionresult


@dataclasses.dataclass
class ImageOcrPhotoRecognizeFormAdvancedHeaders:
    bucket_id: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'bucketID', 'style': 'simple', 'explode': False }})
    bucket_secret_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'bucketSecretKey', 'style': 'simple', 'explode': False }})
    diagnostics: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'diagnostics', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeFormAdvancedRequestBody:
    image_file: ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeFormAdvancedSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeFormAdvancedRequest:
    headers: ImageOcrPhotoRecognizeFormAdvancedHeaders = dataclasses.field()
    request: ImageOcrPhotoRecognizeFormAdvancedRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeFormAdvancedSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeFormAdvancedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    form_recognition_result: Optional[shared_formrecognitionresult.FormRecognitionResult] = dataclasses.field(default=None)
    
