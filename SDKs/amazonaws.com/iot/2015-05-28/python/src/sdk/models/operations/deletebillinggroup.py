import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclasses.dataclass
class DeleteBillingGroupPathParams:
    billing_group_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'billingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBillingGroupQueryParams:
    expected_version: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'expectedVersion', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteBillingGroupHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteBillingGroupRequest:
    headers: DeleteBillingGroupHeaders = dataclasses.field()
    path_params: DeleteBillingGroupPathParams = dataclasses.field()
    query_params: DeleteBillingGroupQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteBillingGroupResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    delete_billing_group_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    version_conflict_exception: Optional[Any] = dataclasses.field(default=None)
    
