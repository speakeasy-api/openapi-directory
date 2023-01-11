import dataclasses
from typing import Optional
from ..shared import global_hook as shared_global_hook


@dataclasses.dataclass
class EnterpriseAdminGetGlobalWebhookPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetGlobalWebhookHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminGetGlobalWebhookRequest:
    headers: EnterpriseAdminGetGlobalWebhookHeaders = dataclasses.field()
    path_params: EnterpriseAdminGetGlobalWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminGetGlobalWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    global_hook: Optional[shared_global_hook.GlobalHook] = dataclasses.field(default=None)
    
