import dataclasses
from typing import Optional
from enum import Enum
from ..shared import direction_enum as shared_direction_enum
from ..shared import direction_enum2 as shared_direction_enum2
from ..shared import pre_receive_hook as shared_pre_receive_hook


@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksQueryParams:
    direction: Optional[shared_direction_enum.DirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[shared_direction_enum2.DirectionEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksRequest:
    query_params: EnterpriseAdminListPreReceiveHooksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class EnterpriseAdminListPreReceiveHooksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    pre_receive_hooks: Optional[list[shared_pre_receive_hook.PreReceiveHook]] = dataclasses.field(default=None)
    
