import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import hook as shared_hook


@dataclasses.dataclass
class ReposGetWebhookPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReposGetWebhookRequest:
    path_params: ReposGetWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposGetWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    hook: Optional[shared_hook.Hook] = dataclasses.field(default=None)
    
