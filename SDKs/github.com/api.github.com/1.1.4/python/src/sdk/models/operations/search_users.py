import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order_enum as shared_order_enum
from ..shared import user_search_result_item as shared_user_search_result_item
from ..shared import validation_error as shared_validation_error

class SearchUsersSortEnum(str, Enum):
    FOLLOWERS = "followers"
    REPOSITORIES = "repositories"
    JOINED = "joined"


@dataclasses.dataclass
class SearchUsersQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[SearchUsersSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchUsers200ApplicationJSON:
    incomplete_results: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: list[shared_user_search_result_item.UserSearchResultItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclasses.dataclass
class SearchUsers503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SearchUsersRequest:
    query_params: SearchUsersQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    search_users_200_application_json_object: Optional[SearchUsers200ApplicationJSON] = dataclasses.field(default=None)
    search_users_503_application_json_object: Optional[SearchUsers503ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
