import dataclasses
from typing import Optional
from ..shared import code_of_conduct as shared_code_of_conduct


@dataclasses.dataclass
class CodesOfConductGetForRepoPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CodesOfConductGetForRepoRequest:
    path_params: CodesOfConductGetForRepoPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CodesOfConductGetForRepoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    code_of_conduct: Optional[shared_code_of_conduct.CodeOfConduct] = dataclasses.field(default=None)
    
