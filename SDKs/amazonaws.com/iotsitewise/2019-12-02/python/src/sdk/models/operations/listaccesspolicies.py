import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listaccesspoliciesresponse as shared_listaccesspoliciesresponse

class ListAccessPoliciesIdentityTypeEnum(str, Enum):
    USER = "USER"
    GROUP = "GROUP"
    IAM = "IAM"

class ListAccessPoliciesResourceTypeEnum(str, Enum):
    PORTAL = "PORTAL"
    PROJECT = "PROJECT"


@dataclasses.dataclass
class ListAccessPoliciesQueryParams:
    iam_arn: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'iamArn', 'style': 'form', 'explode': True }})
    identity_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'identityId', 'style': 'form', 'explode': True }})
    identity_type: Optional[ListAccessPoliciesIdentityTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'identityType', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    resource_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceId', 'style': 'form', 'explode': True }})
    resource_type: Optional[ListAccessPoliciesResourceTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAccessPoliciesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListAccessPoliciesRequest:
    headers: ListAccessPoliciesHeaders = dataclasses.field()
    query_params: ListAccessPoliciesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListAccessPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_access_policies_response: Optional[shared_listaccesspoliciesresponse.ListAccessPoliciesResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
