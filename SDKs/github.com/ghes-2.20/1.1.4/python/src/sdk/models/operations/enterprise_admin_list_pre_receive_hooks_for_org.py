import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import direction_enum2 as shared_direction_enum2
from ..shared import org_pre_receive_hook as shared_org_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForOrgQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_direction_enum2.DirectionEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForOrgRequest:
    path_params: EnterpriseAdminListPreReceiveHooksForOrgPathParams = dataclasses.field()
    query_params: EnterpriseAdminListPreReceiveHooksForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksForOrgResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    org_pre_receive_hooks: Optional[list[shared_org_pre_receive_hook.OrgPreReceiveHook]] = dataclasses.field(default=None)
    
