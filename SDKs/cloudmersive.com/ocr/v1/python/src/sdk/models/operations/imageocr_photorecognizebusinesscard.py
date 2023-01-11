import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import businesscardrecognitionresult as shared_businesscardrecognitionresult


@dataclasses.dataclass
class ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeBusinessCardRequestBody:
    image_file: ImageOcrPhotoRecognizeBusinessCardRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeBusinessCardSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeBusinessCardRequest:
    request: ImageOcrPhotoRecognizeBusinessCardRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ImageOcrPhotoRecognizeBusinessCardSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ImageOcrPhotoRecognizeBusinessCardResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    business_card_recognition_result: Optional[shared_businesscardrecognitionresult.BusinessCardRecognitionResult] = dataclasses.field(default=None)
    
