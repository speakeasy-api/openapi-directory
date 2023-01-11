import dataclasses
from typing import Optional
from ..shared import pre_receive_hook as shared_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveHookPathParams:
    pre_receive_hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'pre_receive_hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveHookRequest:
    path_params: EnterpriseAdminGetPreReceiveHookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetPreReceiveHookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_hook: Optional[shared_pre_receive_hook.PreReceiveHook] = dataclasses.field(default=None)
    
