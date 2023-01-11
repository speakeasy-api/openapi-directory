import dataclasses
from typing import Any,Optional
from ..shared import userentity as shared_userentity


@dataclasses.dataclass
class GetUsersQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    filter_gt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gt', 'style': 'form', 'explode': True }})
    filter_gteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_gteq', 'style': 'form', 'explode': True }})
    filter_like: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_like', 'style': 'form', 'explode': True }})
    filter_lt: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lt', 'style': 'form', 'explode': True }})
    filter_lteq: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter_lteq', 'style': 'form', 'explode': True }})
    ids: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    q_admin_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[admin]', 'style': 'form', 'explode': True }})
    q_allowed_ips_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[allowed_ips]', 'style': 'form', 'explode': True }})
    q_email_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[email]', 'style': 'form', 'explode': True }})
    q_notes_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[notes]', 'style': 'form', 'explode': True }})
    q_password_validity_days_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[password_validity_days]', 'style': 'form', 'explode': True }})
    q_ssl_required_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[ssl_required]', 'style': 'form', 'explode': True }})
    q_username_: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q[username]', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersRequest:
    query_params: GetUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_entities: Optional[list[shared_userentity.UserEntity]] = dataclasses.field(default=None)
    
