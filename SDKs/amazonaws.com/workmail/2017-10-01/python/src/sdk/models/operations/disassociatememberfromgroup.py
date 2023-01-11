import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import disassociatememberfromgrouprequest as shared_disassociatememberfromgrouprequest

class DisassociateMemberFromGroupXAmzTargetEnum(str, Enum):
    WORK_MAIL_SERVICE_DISASSOCIATE_MEMBER_FROM_GROUP = "WorkMailService.DisassociateMemberFromGroup"


@dataclasses.dataclass
class DisassociateMemberFromGroupHeaders:
    x_amz_target: DisassociateMemberFromGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisassociateMemberFromGroupRequest:
    headers: DisassociateMemberFromGroupHeaders = dataclasses.field()
    request: shared_disassociatememberfromgrouprequest.DisassociateMemberFromGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DisassociateMemberFromGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    directory_service_authentication_failed_exception: Optional[Any] = dataclasses.field(default=None)
    directory_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    disassociate_member_from_group_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    entity_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    entity_state_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    organization_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    organization_state_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_operation_exception: Optional[Any] = dataclasses.field(default=None)
    
