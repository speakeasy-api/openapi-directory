import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import principal as shared_principal
from ..shared import createresourcepolicystatementresponse as shared_createresourcepolicystatementresponse


@dataclasses.dataclass
class CreateResourcePolicyStatementPathParams:
    resource_arn: str = dataclasses.field(metadata={'path_param': { 'field_name': 'resourceArn', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateResourcePolicyStatementQueryParams:
    expected_revision_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expectedRevisionId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreateResourcePolicyStatementHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateResourcePolicyStatementRequestBodyEffectEnum(str, Enum):
    ALLOW = "Allow"
    DENY = "Deny"


@dataclass_json
@dataclasses.dataclass
class CreateResourcePolicyStatementRequestBody:
    action: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    effect: CreateResourcePolicyStatementRequestBodyEffectEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('effect') }})
    principal: list[shared_principal.Principal] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('principal') }})
    statement_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statementId') }})
    condition: Optional[dict[str, dict[str, str]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    

@dataclasses.dataclass
class CreateResourcePolicyStatementRequest:
    headers: CreateResourcePolicyStatementHeaders = dataclasses.field()
    path_params: CreateResourcePolicyStatementPathParams = dataclasses.field()
    query_params: CreateResourcePolicyStatementQueryParams = dataclasses.field()
    request: CreateResourcePolicyStatementRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateResourcePolicyStatementResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conflict_exception: Optional[Any] = dataclasses.field(default=None)
    create_resource_policy_statement_response: Optional[shared_createresourcepolicystatementresponse.CreateResourcePolicyStatementResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    precondition_failed_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_quota_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
