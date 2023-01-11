import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import organization_simple as shared_organization_simple


@dataclasses.dataclass
class OrgsListForAuthenticatedUserQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListForAuthenticatedUserRequest:
    query_params: OrgsListForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    organization_simples: Optional[list[shared_organization_simple.OrganizationSimple]] = dataclasses.field(default=None)
    
