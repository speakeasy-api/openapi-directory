import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createaclrequest as shared_createaclrequest
from ..shared import createaclresponse as shared_createaclresponse

class CreateAclxAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_CREATE_ACL = "AmazonMemoryDB.CreateACL"


@dataclasses.dataclass
class CreateACLHeaders:
    x_amz_target: CreateAclxAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateACLRequest:
    headers: CreateACLHeaders = dataclasses.field()
    request: shared_createaclrequest.CreateACLRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateACLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    acl_already_exists_fault: Optional[Any] = dataclasses.field(default=None)
    acl_quota_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    create_acl_response: Optional[shared_createaclresponse.CreateACLResponse] = dataclasses.field(default=None)
    default_user_required: Optional[Any] = dataclasses.field(default=None)
    duplicate_user_name_fault: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_value_exception: Optional[Any] = dataclasses.field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = dataclasses.field(default=None)
    user_not_found_fault: Optional[Any] = dataclasses.field(default=None)
    
