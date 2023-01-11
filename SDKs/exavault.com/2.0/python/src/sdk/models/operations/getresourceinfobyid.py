import dataclasses
from typing import Optional
from ..shared import resourceresponse as shared_resourceresponse


@dataclasses.dataclass
class GetResourceInfoByIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceInfoByIDQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResourceInfoByIDHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceInfoByIDRequest:
    headers: GetResourceInfoByIDHeaders = dataclasses.field()
    path_params: GetResourceInfoByIDPathParams = dataclasses.field()
    query_params: GetResourceInfoByIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourceInfoByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_response: Optional[shared_resourceresponse.ResourceResponse] = dataclasses.field(default=None)
    
