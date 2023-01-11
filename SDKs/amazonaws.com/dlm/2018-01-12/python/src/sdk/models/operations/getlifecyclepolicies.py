import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import resourcetypevalues_enum as shared_resourcetypevalues_enum
from ..shared import getlifecyclepoliciesresponse as shared_getlifecyclepoliciesresponse

class GetLifecyclePoliciesStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    ERROR = "ERROR"


@dataclasses.dataclass
class GetLifecyclePoliciesQueryParams:
    policy_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'policyIds', 'style': 'form', 'explode': True }})
    resource_types: Optional[list[shared_resourcetypevalues_enum.ResourceTypeValuesEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resourceTypes', 'style': 'form', 'explode': True }})
    state: Optional[GetLifecyclePoliciesStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    tags_to_add: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tagsToAdd', 'style': 'form', 'explode': True }})
    target_tags: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetTags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetLifecyclePoliciesHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLifecyclePoliciesRequest:
    headers: GetLifecyclePoliciesHeaders = dataclasses.field()
    query_params: GetLifecyclePoliciesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetLifecyclePoliciesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lifecycle_policies_response: Optional[shared_getlifecyclepoliciesresponse.GetLifecyclePoliciesResponse] = dataclasses.field(default=None)
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
