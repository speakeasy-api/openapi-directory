import dataclasses
from typing import Optional
from ..shared import global_hook as shared_global_hook


@dataclasses.dataclass
class EnterpriseAdminListGlobalWebhooksQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListGlobalWebhooksHeaders:
    accept: str = dataclasses.field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListGlobalWebhooksRequest:
    headers: EnterpriseAdminListGlobalWebhooksHeaders = dataclasses.field()
    query_params: EnterpriseAdminListGlobalWebhooksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListGlobalWebhooksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    global_hooks: Optional[list[shared_global_hook.GlobalHook]] = dataclasses.field(default=None)
    
