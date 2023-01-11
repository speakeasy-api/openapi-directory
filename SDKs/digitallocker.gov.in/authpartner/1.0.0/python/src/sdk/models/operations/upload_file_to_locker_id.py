import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security


@dataclasses.dataclass
class UploadFileToLockerIDHeaders:
    hmac: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'hmac', 'style': 'simple', 'explode': False }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UploadFileToLockerIDRequests:
    application_octet_stream: bytes = dataclasses.field(metadata={'request': { 'media_type': 'application/octet-stream' }})
    image_jpeg: bytes = dataclasses.field(metadata={'request': { 'media_type': 'image/jpeg' }})
    image_jpg: bytes = dataclasses.field(metadata={'request': { 'media_type': 'image/jpg' }})
    image_pdf: bytes = dataclasses.field(metadata={'request': { 'media_type': 'image/pdf' }})
    image_png: bytes = dataclasses.field(metadata={'request': { 'media_type': 'image/png' }})
    

@dataclasses.dataclass
class UploadFileToLockerIDSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclasses.dataclass
class UploadFileToLockerID400ApplicationJSON:
    error: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[Any] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadFileToLockerID401ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclasses.dataclass
class UploadFileToLockerID500ApplicationJSON:
    error: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclasses.dataclass
class UploadFileToLockerIDRequest:
    headers: UploadFileToLockerIDHeaders = dataclasses.field()
    security: UploadFileToLockerIDSecurity = dataclasses.field()
    request: Optional[UploadFileToLockerIDRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UploadFileToLockerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    file_upload_response: Optional[Any] = dataclasses.field(default=None)
    upload_file_to_locker_id_400_application_json_object: Optional[UploadFileToLockerID400ApplicationJSON] = dataclasses.field(default=None)
    upload_file_to_locker_id_401_application_json_object: Optional[UploadFileToLockerID401ApplicationJSON] = dataclasses.field(default=None)
    upload_file_to_locker_id_500_application_json_object: Optional[UploadFileToLockerID500ApplicationJSON] = dataclasses.field(default=None)
    
