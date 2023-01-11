import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import imagetowordswithlocationresult as shared_imagetowordswithlocationresult


@dataclasses.dataclass
class ImageOcrImageWordsWithLocationHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrImageWordsWithLocationRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrImageWordsWithLocationRequestBody:
    image_file: ImageOcrImageWordsWithLocationRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrImageWordsWithLocationSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrImageWordsWithLocationRequest:
    headers: ImageOcrImageWordsWithLocationHeaders = dataclasses.field()
    request: ImageOcrImageWordsWithLocationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrImageWordsWithLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrImageWordsWithLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_to_words_with_location_result: Optional[shared_imagetowordswithlocationresult.ImageToWordsWithLocationResult] = dataclasses.field(default=None)
    
