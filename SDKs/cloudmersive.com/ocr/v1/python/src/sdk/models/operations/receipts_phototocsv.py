import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ReceiptsPhotoToCsvRequestBodyImageFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image_file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'imageFile' }})
    

@dataclasses.dataclass
class ReceiptsPhotoToCsvRequestBody:
    image_file: ReceiptsPhotoToCsvRequestBodyImageFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class ReceiptsPhotoToCsvSecurity:
    apikey: shared_security.SchemeApikey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class ReceiptsPhotoToCsvRequest:
    request: ReceiptsPhotoToCsvRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: ReceiptsPhotoToCsvSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ReceiptsPhotoToCsvResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    receipts_photo_to_csv_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    receipts_photo_to_csv_200_text_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
