import dataclasses
from typing import Optional
from ..shared import resourcecollectionresponse as shared_resourcecollectionresponse


@dataclasses.dataclass
class ListResourcesQueryParams:
    resource: str = dataclasses.field(metadata={'query_param': { 'field_name': 'resource', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListResourcesHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListResourcesRequest:
    headers: ListResourcesHeaders = dataclasses.field()
    query_params: ListResourcesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListResourcesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_collection_response: Optional[shared_resourcecollectionresponse.ResourceCollectionResponse] = dataclasses.field(default=None)
    
