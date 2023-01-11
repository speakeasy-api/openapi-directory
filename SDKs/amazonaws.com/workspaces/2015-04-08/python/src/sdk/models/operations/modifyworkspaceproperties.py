import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import modifyworkspacepropertiesrequest as shared_modifyworkspacepropertiesrequest

class ModifyWorkspacePropertiesXAmzTargetEnum(str, Enum):
    WORKSPACES_SERVICE_MODIFY_WORKSPACE_PROPERTIES = "WorkspacesService.ModifyWorkspaceProperties"


@dataclasses.dataclass
class ModifyWorkspacePropertiesHeaders:
    x_amz_target: ModifyWorkspacePropertiesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ModifyWorkspacePropertiesRequest:
    headers: ModifyWorkspacePropertiesHeaders = dataclasses.field()
    request: shared_modifyworkspacepropertiesrequest.ModifyWorkspacePropertiesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyWorkspacePropertiesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_values_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_resource_state_exception: Optional[Any] = dataclasses.field(default=None)
    modify_workspace_properties_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    operation_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    resource_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_workspace_configuration_exception: Optional[Any] = dataclasses.field(default=None)
    
