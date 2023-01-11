import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import createwebaclmigrationstackrequest as shared_createwebaclmigrationstackrequest
from ..shared import createwebaclmigrationstackresponse as shared_createwebaclmigrationstackresponse

class CreateWebACLMigrationStackXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_CREATE_WEB_ACL_MIGRATION_STACK = "AWSWAF_Regional_20161128.CreateWebACLMigrationStack"


@dataclasses.dataclass
class CreateWebACLMigrationStackHeaders:
    x_amz_target: CreateWebACLMigrationStackXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWebACLMigrationStackRequest:
    headers: CreateWebACLMigrationStackHeaders = dataclasses.field()
    request: shared_createwebaclmigrationstackrequest.CreateWebACLMigrationStackRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateWebACLMigrationStackResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_web_acl_migration_stack_response: Optional[shared_createwebaclmigrationstackresponse.CreateWebACLMigrationStackResponse] = dataclasses.field(default=None)
    waf_entity_migration_exception: Optional[Any] = dataclasses.field(default=None)
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_operation_exception: Optional[Any] = dataclasses.field(default=None)
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    
