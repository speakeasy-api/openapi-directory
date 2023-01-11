import dataclasses
from typing import Optional


@dataclasses.dataclass
class ReposListLanguagesPathParams:
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposListLanguagesRequest:
    path_params: ReposListLanguagesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListLanguagesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    language: Optional[dict[str, int]] = dataclasses.field(default=None)
    
