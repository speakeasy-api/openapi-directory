import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import resetparametergrouprequest as shared_resetparametergrouprequest
from ..shared import resetparametergroupresponse as shared_resetparametergroupresponse

class ResetParameterGroupXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_RESET_PARAMETER_GROUP = "AmazonMemoryDB.ResetParameterGroup"


@dataclasses.dataclass
class ResetParameterGroupHeaders:
    x_amz_target: ResetParameterGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ResetParameterGroupRequest:
    headers: ResetParameterGroupHeaders = dataclasses.field()
    request: shared_resetparametergrouprequest.ResetParameterGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ResetParameterGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_group_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    parameter_group_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    reset_parameter_group_response: Optional[shared_resetparametergroupresponse.ResetParameterGroupResponse] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
