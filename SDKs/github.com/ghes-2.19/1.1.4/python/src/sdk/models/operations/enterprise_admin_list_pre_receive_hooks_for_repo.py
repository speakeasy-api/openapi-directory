import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import direction_enum2 as shared_direction_enum2
from ..shared import repository_pre_receive_hook as shared_repository_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForRepoQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_direction_enum2.DirectionEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForRepoRequest:
    path_params: EnterpriseAdminListPreReceiveHooksForRepoPathParams = dataclasses.field()
    query_params: EnterpriseAdminListPreReceiveHooksForRepoQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    repository_pre_receive_hooks: Optional[list[shared_repository_pre_receive_hook.RepositoryPreReceiveHook]] = dataclasses.field(default=None)
    
