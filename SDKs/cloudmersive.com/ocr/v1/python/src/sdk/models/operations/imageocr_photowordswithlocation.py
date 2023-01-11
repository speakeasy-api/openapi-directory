import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import phototowordswithlocationresult as shared_phototowordswithlocationresult


@dataclasses.dataclass
class ImageOcrPhotoWordsWithLocationHeaders:
    diagnostics: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'diagnostics', 'style': 'simple', 'explode': False }})
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    recognition_mode: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'recognitionMode', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrPhotoWordsWithLocationRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrPhotoWordsWithLocationRequestBody:
    image_file: ImageOcrPhotoWordsWithLocationRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrPhotoWordsWithLocationSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrPhotoWordsWithLocationRequest:
    headers: ImageOcrPhotoWordsWithLocationHeaders = dataclasses.field()
    request: ImageOcrPhotoWordsWithLocationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoWordsWithLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrPhotoWordsWithLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    photo_to_words_with_location_result: Optional[shared_phototowordswithlocationresult.PhotoToWordsWithLocationResult] = dataclasses.field(default=None)
    
