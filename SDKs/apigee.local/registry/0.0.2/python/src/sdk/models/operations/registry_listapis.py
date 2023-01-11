import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryListApisPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryListApisQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryListApisRequest:
    path_params: RegistryListApisPathParams = dataclasses.field()
    query_params: RegistryListApisQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryListApisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_apis_response: Optional[Any] = dataclasses.field(default=None)
    
