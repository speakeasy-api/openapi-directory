import dataclasses
from typing import Optional
from ..shared import basic_error as shared_basic_error
from ..shared import thread as shared_thread
from ..shared import validation_error as shared_validation_error


@dataclasses.dataclass
class ActivityListNotificationsForAuthenticatedUserQueryParams:
    all: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'all', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    participating: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'participating', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ActivityListNotificationsForAuthenticatedUserRequest:
    query_params: ActivityListNotificationsForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ActivityListNotificationsForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    threads: Optional[list[shared_thread.Thread]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
