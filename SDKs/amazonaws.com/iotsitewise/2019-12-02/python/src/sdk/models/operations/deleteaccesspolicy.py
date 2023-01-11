import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class DeleteAccessPolicyPathParams:
    access_policy_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'accessPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAccessPolicyQueryParams:
    client_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteAccessPolicyHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteAccessPolicyRequest:
    headers: DeleteAccessPolicyHeaders = dataclasses.field()
    path_params: DeleteAccessPolicyPathParams = dataclasses.field()
    query_params: DeleteAccessPolicyQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteAccessPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_access_policy_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
