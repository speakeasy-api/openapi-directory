import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createlocationobjectstoragerequest as shared_createlocationobjectstoragerequest
from ..shared import createlocationobjectstorageresponse as shared_createlocationobjectstorageresponse

class CreateLocationObjectStorageXAmzTargetEnum(str, Enum):
    FMRS_SERVICE_CREATE_LOCATION_OBJECT_STORAGE = "FmrsService.CreateLocationObjectStorage"


@dataclasses.dataclass
class CreateLocationObjectStorageHeaders:
    x_amz_target: CreateLocationObjectStorageXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLocationObjectStorageRequest:
    headers: CreateLocationObjectStorageHeaders = dataclasses.field()
    request: shared_createlocationobjectstoragerequest.CreateLocationObjectStorageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLocationObjectStorageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_location_object_storage_response: Optional[shared_createlocationobjectstorageresponse.CreateLocationObjectStorageResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    
