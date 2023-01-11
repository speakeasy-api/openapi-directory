import dataclasses
from typing import Optional
from enum import Enum
from ..shared import org_enum2 as shared_org_enum2
from ..shared import simple_user as shared_simple_user


@dataclasses.dataclass
class OrgsListOutsideCollaboratorsPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListOutsideCollaboratorsQueryParams:
    filter: Optional[shared_org_enum2.OrgEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListOutsideCollaboratorsRequest:
    path_params: OrgsListOutsideCollaboratorsPathParams = dataclasses.field()
    query_params: OrgsListOutsideCollaboratorsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListOutsideCollaboratorsResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    simple_users: Optional[list[shared_simple_user.SimpleUser]] = dataclasses.field(default=None)
    
