import dataclasses
from typing import Optional
from ..shared import resourceresponse as shared_resourceresponse


@dataclasses.dataclass
class GetResourceInfoQueryParams:
    resource: str = dataclasses.field(metadata={'query_param': { 'field_name': 'resource', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetResourceInfoHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetResourceInfoRequest:
    headers: GetResourceInfoHeaders = dataclasses.field()
    query_params: GetResourceInfoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetResourceInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    resource_response: Optional[shared_resourceresponse.ResourceResponse] = dataclasses.field(default=None)
    
