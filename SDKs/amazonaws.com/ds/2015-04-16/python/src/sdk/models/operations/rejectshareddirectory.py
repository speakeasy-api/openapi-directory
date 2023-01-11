import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import rejectshareddirectoryrequest as shared_rejectshareddirectoryrequest
from ..shared import rejectshareddirectoryresult as shared_rejectshareddirectoryresult

class RejectSharedDirectoryXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_REJECT_SHARED_DIRECTORY = "DirectoryService_20150416.RejectSharedDirectory"


@dataclasses.dataclass
class RejectSharedDirectoryHeaders:
    x_amz_target: RejectSharedDirectoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RejectSharedDirectoryRequest:
    headers: RejectSharedDirectoryHeaders = dataclasses.field()
    request: shared_rejectshareddirectoryrequest.RejectSharedDirectoryRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RejectSharedDirectoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    client_exception: Optional[Any] = dataclasses.field(default=None)
    directory_already_shared_exception: Optional[Any] = dataclasses.field(default=None)
    entity_does_not_exist_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    reject_shared_directory_result: Optional[shared_rejectshareddirectoryresult.RejectSharedDirectoryResult] = dataclasses.field(default=None)
    service_exception: Optional[Any] = dataclasses.field(default=None)
    
