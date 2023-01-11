import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryListProjectsQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryListProjectsRequest:
    query_params: RegistryListProjectsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryListProjectsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_projects_response: Optional[Any] = dataclasses.field(default=None)
    
