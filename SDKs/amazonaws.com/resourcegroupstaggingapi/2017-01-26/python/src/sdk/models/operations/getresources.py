import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getresourcesinput as shared_getresourcesinput
from ..shared import getresourcesoutput as shared_getresourcesoutput


@dataclasses.dataclass
class GetResourcesQueryParams:
    pagination_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PaginationToken', 'style': 'form', 'explode': True }})
    resources_per_page: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ResourcesPerPage', 'style': 'form', 'explode': True }})
    
class GetResourcesXAmzTargetEnum(str, Enum):
    RESOURCE_GROUPS_TAGGING_API_20170126_GET_RESOURCES = "ResourceGroupsTaggingAPI_20170126.GetResources"


@dataclasses.dataclass
class GetResourcesHeaders:
    x_amz_target: GetResourcesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourcesRequest:
    headers: GetResourcesHeaders = dataclasses.field()
    query_params: GetResourcesQueryParams = dataclasses.field()
    request: shared_getresourcesinput.GetResourcesInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_resources_output: Optional[shared_getresourcesoutput.GetResourcesOutput] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    pagination_token_expired_exception: Optional[Any] = dataclasses.field(default=None)
    throttled_exception: Optional[Any] = dataclasses.field(default=None)
    
