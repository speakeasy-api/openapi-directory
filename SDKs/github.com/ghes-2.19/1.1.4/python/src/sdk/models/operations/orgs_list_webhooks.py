import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import org_hook as shared_org_hook


@dataclasses.dataclass
class OrgsListWebhooksPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OrgsListWebhooksQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OrgsListWebhooksRequest:
    path_params: OrgsListWebhooksPathParams = dataclasses.field()
    query_params: OrgsListWebhooksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class OrgsListWebhooksResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    org_hooks: Optional[list[shared_org_hook.OrgHook]] = dataclasses.field(default=None)
    
