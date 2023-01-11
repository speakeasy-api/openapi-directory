import dataclasses
from typing import Optional
from ..shared import userrequestentity as shared_userrequestentity


@dataclasses.dataclass
class GetUserRequestsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserRequestsRequest:
    query_params: GetUserRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    user_request_entities: Optional[list[shared_userrequestentity.UserRequestEntity]] = dataclasses.field(default=None)
    
