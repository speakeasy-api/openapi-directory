import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteworkspaceimagerequest as shared_deleteworkspaceimagerequest

class DeleteWorkspaceImageXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_DELETE_WORKSPACE_IMAGE = "WorkspacesService.DeleteWorkspaceImage"


@dataclasses.dataclass
class DeleteWorkspaceImageHeaders:
    x_amz_target: DeleteWorkspaceImageXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkspaceImageRequest:
    headers: DeleteWorkspaceImageHeaders = dataclasses.field()
    request: shared_deleteworkspaceimagerequest.DeleteWorkspaceImageRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteWorkspaceImageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    delete_workspace_image_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    invalid_resource_state_exception: Optional[Any] = dataclasses.field(default=None)
    resource_associated_exception: Optional[Any] = dataclasses.field(default=None)
    
