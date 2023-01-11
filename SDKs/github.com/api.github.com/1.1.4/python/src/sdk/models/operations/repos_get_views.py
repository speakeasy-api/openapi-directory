import dataclasses
from typing import Optional
from enum import Enum
from ..shared import per_enum as shared_per_enum
from ..shared import basic_error as shared_basic_error
from ..shared import view_traffic as shared_view_traffic


@dataclasses.dataclass
class ReposGetViewsPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetViewsQueryParams:
    per: Optional[shared_per_enum.PerEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposGetViewsRequest:
    path_params: ReposGetViewsPathParams = dataclasses.field()
    query_params: ReposGetViewsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetViewsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    view_traffic: Optional[shared_view_traffic.ViewTraffic] = dataclasses.field(default=None)
    
