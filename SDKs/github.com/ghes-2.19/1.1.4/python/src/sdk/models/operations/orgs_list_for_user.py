import dataclasses
from typing import Optional
from ..shared import organization_simple as shared_organization_simple


@dataclasses.dataclass
class OrgsListForUserPathParams:
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListForUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListForUserRequest:
    path_params: OrgsListForUserPathParams = dataclasses.field()
    query_params: OrgsListForUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListForUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_simples: Optional[list[shared_organization_simple.OrganizationSimple]] = dataclasses.field(default=None)
    
