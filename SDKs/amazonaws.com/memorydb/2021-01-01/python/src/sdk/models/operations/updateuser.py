import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateuserrequest as shared_updateuserrequest
from ..shared import updateuserresponse as shared_updateuserresponse

class UpdateUserXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_UPDATE_USER = "AmazonMemoryDB.UpdateUser"


@dataclasses.dataclass
class UpdateUserHeaders:
    x_amz_target: UpdateUserXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUserRequest:
    headers: UpdateUserHeaders = dataclasses.field()
    request: shared_updateuserrequest.UpdateUserRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_user_state_fault: Optional[Any] = dataclasses.field(default=None)
    update_user_response: Optional[shared_updateuserresponse.UpdateUserResponse] = dataclasses.field(default=None)
    user_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
