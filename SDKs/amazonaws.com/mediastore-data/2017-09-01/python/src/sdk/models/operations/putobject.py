import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import putobjectresponse as shared_putobjectresponse


@dataclasses.dataclass
class PutObjectPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Path', 'style': 'simple', 'explode': False }})
    
class PutObjectXAmzStorageClassEnum(str, Enum):
    TEMPORAL = "TEMPORAL"

class PutObjectXAmzUploadAvailabilityEnum(str, Enum):
    STANDARD = "STANDARD"
    STREAMING = "STREAMING"


@dataclasses.dataclass
class PutObjectHeaders:
    cache_control: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Cache-Control', 'style': 'simple', 'explode': False }})
    content_type: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_storage_class: Optional[PutObjectXAmzStorageClassEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-storage-class', 'style': 'simple', 'explode': False }})
    x_amz_upload_availability: Optional[PutObjectXAmzUploadAvailabilityEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'x-amz-upload-availability', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutObjectRequestBody:
    body: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    

@dataclasses.dataclass
class PutObjectRequest:
    headers: PutObjectHeaders = dataclasses.field()
    path_params: PutObjectPathParams = dataclasses.field()
    request: PutObjectRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutObjectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    container_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    put_object_response: Optional[shared_putobjectresponse.PutObjectResponse] = dataclasses.field(default=None)
    
