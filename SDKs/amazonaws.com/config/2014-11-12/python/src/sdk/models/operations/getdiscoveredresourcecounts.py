import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getdiscoveredresourcecountsrequest as shared_getdiscoveredresourcecountsrequest
from ..shared import getdiscoveredresourcecountsresponse as shared_getdiscoveredresourcecountsresponse


@dataclasses.dataclass
class GetDiscoveredResourceCountsQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetDiscoveredResourceCountsXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_GET_DISCOVERED_RESOURCE_COUNTS = "StarlingDoveService.GetDiscoveredResourceCounts"


@dataclasses.dataclass
class GetDiscoveredResourceCountsHeaders:
    x_amz_target: GetDiscoveredResourceCountsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDiscoveredResourceCountsRequest:
    headers: GetDiscoveredResourceCountsHeaders = dataclasses.field()
    query_params: GetDiscoveredResourceCountsQueryParams = dataclasses.field()
    request: shared_getdiscoveredresourcecountsrequest.GetDiscoveredResourceCountsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetDiscoveredResourceCountsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_discovered_resource_counts_response: Optional[shared_getdiscoveredresourcecountsresponse.GetDiscoveredResourceCountsResponse] = dataclasses.field(default=None)
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
