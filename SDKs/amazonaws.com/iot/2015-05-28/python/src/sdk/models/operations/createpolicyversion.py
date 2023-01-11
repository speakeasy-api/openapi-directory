import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import createpolicyversionresponse as shared_createpolicyversionresponse


@dataclasses.dataclass
class CreatePolicyVersionPathParams:
    policy_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'policyName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreatePolicyVersionQueryParams:
    set_as_default: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'setAsDefault', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CreatePolicyVersionHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreatePolicyVersionRequestBody:
    policy_document: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyDocument') }})
    

@dataclasses.dataclass
class CreatePolicyVersionRequest:
    headers: CreatePolicyVersionHeaders = dataclasses.field()
    path_params: CreatePolicyVersionPathParams = dataclasses.field()
    query_params: CreatePolicyVersionQueryParams = dataclasses.field()
    request: CreatePolicyVersionRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreatePolicyVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_policy_version_response: Optional[shared_createpolicyversionresponse.CreatePolicyVersionResponse] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    malformed_policy_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    versions_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    
