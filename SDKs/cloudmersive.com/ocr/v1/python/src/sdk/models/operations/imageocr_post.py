import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import imagetotextresponse as shared_imagetotextresponse


@dataclasses.dataclass
class ImageOcrPostHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrPostRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrPostRequestBody:
    image_file: ImageOcrPostRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrPostSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrPostRequest:
    headers: ImageOcrPostHeaders = dataclasses.field()
    request: ImageOcrPostRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPostSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrPostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_to_text_response: Optional[shared_imagetotextresponse.ImageToTextResponse] = dataclasses.field(default=None)
    
