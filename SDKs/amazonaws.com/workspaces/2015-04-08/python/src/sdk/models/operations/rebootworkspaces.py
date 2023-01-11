import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import rebootworkspacesrequest as shared_rebootworkspacesrequest
from ..shared import rebootworkspacesresult as shared_rebootworkspacesresult

class RebootWorkspacesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_REBOOT_WORKSPACES = "WorkspacesService.RebootWorkspaces"


@dataclasses.dataclass
class RebootWorkspacesHeaders:
    x_amz_target: RebootWorkspacesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RebootWorkspacesRequest:
    headers: RebootWorkspacesHeaders = dataclasses.field()
    request: shared_rebootworkspacesrequest.RebootWorkspacesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RebootWorkspacesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    reboot_workspaces_result: Optional[shared_rebootworkspacesresult.RebootWorkspacesResult] = dataclasses.field(default=None)
    
