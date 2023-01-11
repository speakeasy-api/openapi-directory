import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createdirectoryconfigrequest as shared_createdirectoryconfigrequest
from ..shared import createdirectoryconfigresult as shared_createdirectoryconfigresult

class CreateDirectoryConfigXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_CREATE_DIRECTORY_CONFIG = "PhotonAdminProxyService.CreateDirectoryConfig"


@dataclasses.dataclass
class CreateDirectoryConfigHeaders:
    x_amz_target: CreateDirectoryConfigXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateDirectoryConfigRequest:
    headers: CreateDirectoryConfigHeaders = dataclasses.field()
    request: shared_createdirectoryconfigrequest.CreateDirectoryConfigRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateDirectoryConfigResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_directory_config_result: Optional[shared_createdirectoryconfigresult.CreateDirectoryConfigResult] = dataclasses.field(default=None)
    invalid_account_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
