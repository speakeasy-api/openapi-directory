import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deleteimagepermissionsrequest as shared_deleteimagepermissionsrequest

class DeleteImagePermissionsXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_DELETE_IMAGE_PERMISSIONS = "PhotonAdminProxyService.DeleteImagePermissions"


@dataclasses.dataclass
class DeleteImagePermissionsHeaders:
    x_amz_target: DeleteImagePermissionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteImagePermissionsRequest:
    headers: DeleteImagePermissionsHeaders = dataclasses.field()
    request: shared_deleteimagepermissionsrequest.DeleteImagePermissionsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeleteImagePermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_image_permissions_result: Optional[dict[str, Any]] = dataclasses.field(default=None)
    resource_not_available_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
