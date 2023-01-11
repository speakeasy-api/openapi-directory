import dataclasses
from typing import Optional
from ..shared import organization_simple as shared_organization_simple


@dataclasses.dataclass
class OrgsListQueryParams:
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListRequest:
    query_params: OrgsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    organization_simples: Optional[list[shared_organization_simple.OrganizationSimple]] = dataclasses.field(default=None)
    
