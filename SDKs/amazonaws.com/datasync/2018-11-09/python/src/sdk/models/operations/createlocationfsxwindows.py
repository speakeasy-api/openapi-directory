import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createlocationfsxwindowsrequest as shared_createlocationfsxwindowsrequest
from ..shared import createlocationfsxwindowsresponse as shared_createlocationfsxwindowsresponse

class CreateLocationFsxWindowsXAmzTargetEnum(str, Enum):
    FMRS_SERVICE_CREATE_LOCATION_FSX_WINDOWS = "FmrsService.CreateLocationFsxWindows"


@dataclasses.dataclass
class CreateLocationFsxWindowsHeaders:
    x_amz_target: CreateLocationFsxWindowsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLocationFsxWindowsRequest:
    headers: CreateLocationFsxWindowsHeaders = dataclasses.field()
    request: shared_createlocationfsxwindowsrequest.CreateLocationFsxWindowsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLocationFsxWindowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_location_fsx_windows_response: Optional[shared_createlocationfsxwindowsresponse.CreateLocationFsxWindowsResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    
