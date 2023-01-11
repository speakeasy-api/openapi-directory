import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describelocationfsxwindowsrequest as shared_describelocationfsxwindowsrequest
from ..shared import describelocationfsxwindowsresponse as shared_describelocationfsxwindowsresponse

class DescribeLocationFsxWindowsXAmzTargetEnum(str, Enum):
    FMRS_SERVICE_DESCRIBE_LOCATION_FSX_WINDOWS = "FmrsService.DescribeLocationFsxWindows"


@dataclasses.dataclass
class DescribeLocationFsxWindowsHeaders:
    x_amz_target: DescribeLocationFsxWindowsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeLocationFsxWindowsRequest:
    headers: DescribeLocationFsxWindowsHeaders = dataclasses.field()
    request: shared_describelocationfsxwindowsrequest.DescribeLocationFsxWindowsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeLocationFsxWindowsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_location_fsx_windows_response: Optional[shared_describelocationfsxwindowsresponse.DescribeLocationFsxWindowsResponse] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    
