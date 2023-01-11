import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import order_enum as shared_order_enum
from ..shared import issue_search_result_item as shared_issue_search_result_item
from ..shared import basic_error as shared_basic_error
from ..shared import validation_error as shared_validation_error

class SearchIssuesAndPullRequestsSortEnum(str, Enum):
    COMMENTS = "comments"
    REACTIONS = "reactions"
    REACTIONS_PLUS_1 = "reactions-+1"
    REACTIONS_1 = "reactions--1"
    REACTIONS_SMILE = "reactions-smile"
    REACTIONS_THINKING_FACE = "reactions-thinking_face"
    REACTIONS_HEART = "reactions-heart"
    REACTIONS_TADA = "reactions-tada"
    INTERACTIONS = "interactions"
    CREATED = "created"
    UPDATED = "updated"


@dataclasses.dataclass
class SearchIssuesAndPullRequestsQueryParams:
    q: str = dataclasses.field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    order: Optional[shared_order_enum.OrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort: Optional[SearchIssuesAndPullRequestsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchIssuesAndPullRequests200ApplicationJSON:
    incomplete_results: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incomplete_results') }})
    items: list[shared_issue_search_result_item.IssueSearchResultItem] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    total_count: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_count') }})
    

@dataclass_json
@dataclasses.dataclass
class SearchIssuesAndPullRequests503ApplicationJSON:
    code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    documentation_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class SearchIssuesAndPullRequestsRequest:
    query_params: SearchIssuesAndPullRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchIssuesAndPullRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    search_issues_and_pull_requests_200_application_json_object: Optional[SearchIssuesAndPullRequests200ApplicationJSON] = dataclasses.field(default=None)
    search_issues_and_pull_requests_503_application_json_object: Optional[SearchIssuesAndPullRequests503ApplicationJSON] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
