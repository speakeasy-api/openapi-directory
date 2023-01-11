import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import org_hook as shared_org_hook


@dataclasses.dataclass
class OrgsGetWebhookPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsGetWebhookRequest:
    path_params: OrgsGetWebhookPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsGetWebhookResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    org_hook: Optional[shared_org_hook.OrgHook] = dataclasses.field(default=None)
    
