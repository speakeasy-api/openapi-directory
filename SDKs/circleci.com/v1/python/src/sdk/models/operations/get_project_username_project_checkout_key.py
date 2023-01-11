import dataclasses
from typing import Optional
from ..shared import key as shared_key


@dataclasses.dataclass
class GetProjectUsernameProjectCheckoutKeyPathParams:
    project: str = dataclasses.field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetProjectUsernameProjectCheckoutKeyRequest:
    path_params: GetProjectUsernameProjectCheckoutKeyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetProjectUsernameProjectCheckoutKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    keys: Optional[list[shared_key.Key]] = dataclasses.field(default=None)
    
