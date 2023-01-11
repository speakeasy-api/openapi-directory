import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createparametergrouprequest as shared_createparametergrouprequest
from ..shared import createparametergroupresponse as shared_createparametergroupresponse

class CreateParameterGroupXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_CREATE_PARAMETER_GROUP = "AmazonMemoryDB.CreateParameterGroup"


@dataclasses.dataclass
class CreateParameterGroupHeaders:
    x_amz_target: CreateParameterGroupXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateParameterGroupRequest:
    headers: CreateParameterGroupHeaders = dataclasses.field()
    request: shared_createparametergrouprequest.CreateParameterGroupRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateParameterGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_parameter_group_response: Optional[shared_createparametergroupresponse.CreateParameterGroupResponse] = dataclasses.field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_group_state_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    parameter_group_already_exists_fault: Optional[Any] = dataclasses.field(default=None)
    parameter_group_quota_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    service_linked_role_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = dataclasses.field(default=None)
    
