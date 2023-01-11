import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import issue_number_enum as shared_issue_number_enum
from ..shared import basic_error as shared_basic_error
from ..shared import reaction as shared_reaction


@dataclasses.dataclass
class ReactionsListForIssuePathParams:
    issue_number: int = dataclasses.field(metadata={'path_param': { 'field_name': 'issue_number', 'style': 'simple', 'explode': False }})
    owner: str = dataclasses.field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = dataclasses.field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ReactionsListForIssueQueryParams:
    content: Optional[shared_issue_number_enum.IssueNumberEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'content', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class ReactionsListForIssue415ApplicationJSON:
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentation_url') }})
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclasses.dataclass
class ReactionsListForIssueRequest:
    path_params: ReactionsListForIssuePathParams = dataclasses.field()
    query_params: ReactionsListForIssueQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReactionsListForIssueResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    reactions: Optional[list[shared_reaction.Reaction]] = dataclasses.field(default=None)
    reactions_list_for_issue_415_application_json_object: Optional[ReactionsListForIssue415ApplicationJSON] = dataclasses.field(default=None)
    
