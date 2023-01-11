import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listdiscoveredresourcesrequest as shared_listdiscoveredresourcesrequest
from ..shared import listdiscoveredresourcesresponse as shared_listdiscoveredresourcesresponse


@dataclasses.dataclass
class ListDiscoveredResourcesQueryParams:
    limit: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListDiscoveredResourcesXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_LIST_DISCOVERED_RESOURCES = "StarlingDoveService.ListDiscoveredResources"


@dataclasses.dataclass
class ListDiscoveredResourcesHeaders:
    x_amz_target: ListDiscoveredResourcesXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDiscoveredResourcesRequest:
    headers: ListDiscoveredResourcesHeaders = dataclasses.field()
    query_params: ListDiscoveredResourcesQueryParams = dataclasses.field()
    request: shared_listdiscoveredresourcesrequest.ListDiscoveredResourcesRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListDiscoveredResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_limit_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_discovered_resources_response: Optional[shared_listdiscoveredresourcesresponse.ListDiscoveredResourcesResponse] = dataclasses.field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
