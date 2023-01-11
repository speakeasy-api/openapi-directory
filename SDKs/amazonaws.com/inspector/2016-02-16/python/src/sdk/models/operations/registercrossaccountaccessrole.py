import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registercrossaccountaccessrolerequest as shared_registercrossaccountaccessrolerequest

class RegisterCrossAccountAccessRoleXAmzTargetEnum(str, Enum):
    INSPECTOR_SERVICE_REGISTER_CROSS_ACCOUNT_ACCESS_ROLE = "InspectorService.RegisterCrossAccountAccessRole"


@dataclasses.dataclass
class RegisterCrossAccountAccessRoleHeaders:
    x_amz_target: RegisterCrossAccountAccessRoleXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterCrossAccountAccessRoleRequest:
    headers: RegisterCrossAccountAccessRoleHeaders = dataclasses.field()
    request: shared_registercrossaccountaccessrolerequest.RegisterCrossAccountAccessRoleRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterCrossAccountAccessRoleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_cross_account_role_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    service_temporarily_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    
