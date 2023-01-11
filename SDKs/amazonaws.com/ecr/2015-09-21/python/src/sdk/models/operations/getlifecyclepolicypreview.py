import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getlifecyclepolicypreviewrequest as shared_getlifecyclepolicypreviewrequest
from ..shared import getlifecyclepolicypreviewresponse as shared_getlifecyclepolicypreviewresponse


@dataclasses.dataclass
class GetLifecyclePolicyPreviewQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetLifecyclePolicyPreviewXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_GET_LIFECYCLE_POLICY_PREVIEW = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"


@dataclasses.dataclass
class GetLifecyclePolicyPreviewHeaders:
    x_amz_target: GetLifecyclePolicyPreviewXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLifecyclePolicyPreviewRequest:
    headers: GetLifecyclePolicyPreviewHeaders = dataclasses.field()
    query_params: GetLifecyclePolicyPreviewQueryParams = dataclasses.field()
    request: shared_getlifecyclepolicypreviewrequest.GetLifecyclePolicyPreviewRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetLifecyclePolicyPreviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_lifecycle_policy_preview_response: Optional[shared_getlifecyclepolicypreviewresponse.GetLifecyclePolicyPreviewResponse] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    lifecycle_policy_preview_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
