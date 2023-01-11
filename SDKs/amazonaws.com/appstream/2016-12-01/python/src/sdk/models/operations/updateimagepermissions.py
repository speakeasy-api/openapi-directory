import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateimagepermissionsrequest as shared_updateimagepermissionsrequest

class UpdateImagePermissionsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_UPDATE_IMAGE_PERMISSIONS = "PhotonAdminProxyService.UpdateImagePermissions"


@dataclasses.dataclass
class UpdateImagePermissionsHeaders:
    x_amz_target: UpdateImagePermissionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateImagePermissionsRequest:
    headers: UpdateImagePermissionsHeaders = dataclasses.field()
    request: shared_updateimagepermissionsrequest.UpdateImagePermissionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateImagePermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_available_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    update_image_permissions_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
