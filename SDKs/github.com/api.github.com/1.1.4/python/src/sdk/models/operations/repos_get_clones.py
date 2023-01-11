import dataclasses
from typing import Optional
from enum import Enum
from ..shared import per_enum as shared_per_enum
from ..shared import basic_error as shared_basic_error
from ..shared import clone_traffic as shared_clone_traffic


@dataclasses.dataclass
class ReposGetClonesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetClonesQueryParams:
    per: Optional[shared_per_enum.PerEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposGetClonesRequest:
    path_params: ReposGetClonesPathParams = dataclasses.field()
    query_params: ReposGetClonesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetClonesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    clone_traffic: Optional[shared_clone_traffic.CloneTraffic] = dataclasses.field(default=None)
    
