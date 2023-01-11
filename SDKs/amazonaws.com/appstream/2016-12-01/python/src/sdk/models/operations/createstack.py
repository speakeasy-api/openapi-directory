import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createstackrequest as shared_createstackrequest
from ..shared import createstackresult as shared_createstackresult

class CreateStackXAmzTargetEnum(str, Enum):
    PHOTON_ADMIN_PROXY_SERVICE_CREATE_STACK = "PhotonAdminProxyService.CreateStack"


@dataclasses.dataclass
class CreateStackHeaders:
    x_amz_target: CreateStackXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateStackRequest:
    headers: CreateStackHeaders = dataclasses.field()
    request: shared_createstackrequest.CreateStackRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_modification_exception: Optional[Any] = dataclasses.field(default=None)
    create_stack_result: Optional[shared_createstackresult.CreateStackResult] = dataclasses.field(default=None)
    invalid_account_status_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_role_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
