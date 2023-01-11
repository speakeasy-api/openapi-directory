import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class RegistryListAPISpecRevisionsPathParams:
    api: str = dataclasses.field(metadata={'path_param': { 'field_name': 'api', 'style': 'simple', 'explode': False }})
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    spec: str = dataclasses.field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    version: str = dataclasses.field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegistryListAPISpecRevisionsQueryParams:
    page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_token', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RegistryListAPISpecRevisionsRequest:
    path_params: RegistryListAPISpecRevisionsPathParams = dataclasses.field()
    query_params: RegistryListAPISpecRevisionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class RegistryListAPISpecRevisionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_api_spec_revisions_response: Optional[Any] = dataclasses.field(default=None)
    
