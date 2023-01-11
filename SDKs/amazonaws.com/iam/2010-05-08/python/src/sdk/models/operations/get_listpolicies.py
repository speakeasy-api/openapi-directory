import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetListPoliciesActionEnum(str, Enum):
    LIST_POLICIES = "ListPolicies"

class GetListPoliciesPolicyUsageFilterEnum(str, Enum):
    PERMISSIONS_POLICY = "PermissionsPolicy"
    PERMISSIONS_BOUNDARY = "PermissionsBoundary"

class GetListPoliciesScopeEnum(str, Enum):
    ALL = "All"
    AWS = "AWS"
    LOCAL = "Local"

class GetListPoliciesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_05_08 = "2010-05-08"


@dataclasses.dataclass
class GetListPoliciesQueryParams:
    action: GetListPoliciesActionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetListPoliciesVersionEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    marker: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    only_attached: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'OnlyAttached', 'style': 'form', 'explode': True }})
    path_prefix: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PathPrefix', 'style': 'form', 'explode': True }})
    policy_usage_filter: Optional[GetListPoliciesPolicyUsageFilterEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PolicyUsageFilter', 'style': 'form', 'explode': True }})
    scope: Optional[GetListPoliciesScopeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Scope', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetListPoliciesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetListPoliciesRequest:
    headers: GetListPoliciesHeaders = dataclasses.field()
    query_params: GetListPoliciesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetListPoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
