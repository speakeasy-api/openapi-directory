import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import imagetolineswithlocationresult as shared_imagetolineswithlocationresult


@dataclasses.dataclass
class ImageOcrImageLinesWithLocationHeaders:
    language: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'language', 'style': 'simple', 'explode': False }})
    preprocessing: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'preprocessing', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ImageOcrImageLinesWithLocationRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrImageLinesWithLocationRequestBody:
    image_file: ImageOcrImageLinesWithLocationRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrImageLinesWithLocationSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrImageLinesWithLocationRequest:
    headers: ImageOcrImageLinesWithLocationHeaders = dataclasses.field()
    request: ImageOcrImageLinesWithLocationRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrImageLinesWithLocationSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrImageLinesWithLocationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    image_to_lines_with_location_result: Optional[shared_imagetolineswithlocationresult.ImageToLinesWithLocationResult] = dataclasses.field(default=None)
    
