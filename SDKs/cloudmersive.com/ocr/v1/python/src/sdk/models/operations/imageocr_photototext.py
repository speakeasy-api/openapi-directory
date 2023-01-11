import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import imagetotextresponse as shared_imagetotextresponse


@dataclasses.dataclass
class ImageOcrPhotoToTextHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrPhotoToTextRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrPhotoToTextRequestBody:
    image_file: ImageOcrPhotoToTextRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrPhotoToTextSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrPhotoToTextRequest:
    headers: ImageOcrPhotoToTextHeaders = dataclasses.field()
    request: ImageOcrPhotoToTextRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoToTextSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrPhotoToTextResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_to_text_response: Optional[shared_imagetotextresponse.ImageToTextResponse] = dataclasses.field(default=None)
    
