import dataclasses
from typing import Optional
from ..shared import webhook_config as shared_webhook_config


@dataclasses.dataclass
class OrgsGetWebhookConfigForOrgPathParams:
    hook_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'hook_id', 'style': 'simple', 'explode': False }})
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsGetWebhookConfigForOrgRequest:
    path_params: OrgsGetWebhookConfigForOrgPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsGetWebhookConfigForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_config: Optional[shared_webhook_config.WebhookConfig] = dataclasses.field(default=None)
    
