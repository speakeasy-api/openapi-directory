import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import creategrouprequest as shared_creategrouprequest
from ..shared import creategroupresponse as shared_creategroupresponse

class CreateGroupXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_CREATE_GROUP = "WorkMailService.CreateGroup"


@dataclasses.dataclass
class CreateGroupHeaders:
    x_amz_target: CreateGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateGroupRequest:
    headers: CreateGroupHeaders = dataclasses.field()
    request: shared_creategrouprequest.CreateGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_group_response: Optional[shared_creategroupresponse.CreateGroupResponse] = dataclasses.field(default=None)
    directory_service_authentication_failed_exception: Optional[Any] = dataclasses.field(default=None)
    directory_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    name_availability_exception: Optional[Any] = dataclasses.field(default=None)
    organization_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    organization_state_exception: Optional[Any] = dataclasses.field(default=None)
    reserved_name_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
