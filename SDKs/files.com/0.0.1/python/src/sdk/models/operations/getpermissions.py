import dataclasses
from typing import Any,Optional
from ..shared import permissionentity as shared_permissionentity


@dataclasses.dataclass
class GetPermissionsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    include_groups: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_groups', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPermissionsRequest:
    query_params: GetPermissionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPermissionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    permission_entities: Optional[list[shared_permissionentity.PermissionEntity]] = dataclasses.field(default=None)
    
