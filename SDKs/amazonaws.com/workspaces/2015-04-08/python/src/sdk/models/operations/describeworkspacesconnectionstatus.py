import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import describeworkspacesconnectionstatusrequest as shared_describeworkspacesconnectionstatusrequest
from ..shared import describeworkspacesconnectionstatusresult as shared_describeworkspacesconnectionstatusresult

class DescribeWorkspacesConnectionStatusXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DESCRIBE_WORKSPACES_CONNECTION_STATUS = "WorkspacesService.DescribeWorkspacesConnectionStatus"


@dataclasses.dataclass
class DescribeWorkspacesConnectionStatusHeaders:
    x_amz_target: DescribeWorkspacesConnectionStatusXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DescribeWorkspacesConnectionStatusRequest:
    headers: DescribeWorkspacesConnectionStatusHeaders = dataclasses.field()
    request: shared_describeworkspacesconnectionstatusrequest.DescribeWorkspacesConnectionStatusRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DescribeWorkspacesConnectionStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    describe_workspaces_connection_status_result: Optional[shared_describeworkspacesconnectionstatusresult.DescribeWorkspacesConnectionStatusResult] = dataclasses.field(default=None)
    invalid_parameter_values_exception: Optional[Any] = dataclasses.field(default=None)
    
