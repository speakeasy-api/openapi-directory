import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import fields_enum1 as shared_fields_enum1
from ..shared import fields_enum2 as shared_fields_enum2
from ..shared import taskcompact as shared_taskcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class SearchTasksForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SearchTasksForWorkspaceQueryParams:
    assigned_by_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assigned_by.any', 'style': 'form', 'explode': True }})
    assigned_by_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assigned_by.not', 'style': 'form', 'explode': True }})
    assignee_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee.any', 'style': 'form', 'explode': True }})
    assignee_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'assignee.not', 'style': 'form', 'explode': True }})
    commented_on_by_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'commented_on_by.any', 'style': 'form', 'explode': True }})
    commented_on_by_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'commented_on_by.not', 'style': 'form', 'explode': True }})
    completed: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed', 'style': 'form', 'explode': True }})
    completed_at_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_at.after', 'style': 'form', 'explode': True }})
    completed_at_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_at.before', 'style': 'form', 'explode': True }})
    completed_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_on', 'style': 'form', 'explode': True }})
    completed_on_after: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_on.after', 'style': 'form', 'explode': True }})
    completed_on_before: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'completed_on.before', 'style': 'form', 'explode': True }})
    created_at_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at.after', 'style': 'form', 'explode': True }})
    created_at_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_at.before', 'style': 'form', 'explode': True }})
    created_by_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_by.any', 'style': 'form', 'explode': True }})
    created_by_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_by.not', 'style': 'form', 'explode': True }})
    created_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_on', 'style': 'form', 'explode': True }})
    created_on_after: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_on.after', 'style': 'form', 'explode': True }})
    created_on_before: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'created_on.before', 'style': 'form', 'explode': True }})
    due_at_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at.after', 'style': 'form', 'explode': True }})
    due_at_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_at.before', 'style': 'form', 'explode': True }})
    due_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_on', 'style': 'form', 'explode': True }})
    due_on_after: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_on.after', 'style': 'form', 'explode': True }})
    due_on_before: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'due_on.before', 'style': 'form', 'explode': True }})
    followers_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'followers.any', 'style': 'form', 'explode': True }})
    followers_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'followers.not', 'style': 'form', 'explode': True }})
    has_attachment: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'has_attachment', 'style': 'form', 'explode': True }})
    is_blocked: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_blocked', 'style': 'form', 'explode': True }})
    is_blocking: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_blocking', 'style': 'form', 'explode': True }})
    is_subtask: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'is_subtask', 'style': 'form', 'explode': True }})
    liked_by_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'liked_by.any', 'style': 'form', 'explode': True }})
    liked_by_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'liked_by.not', 'style': 'form', 'explode': True }})
    modified_at_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_at.after', 'style': 'form', 'explode': True }})
    modified_at_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_at.before', 'style': 'form', 'explode': True }})
    modified_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_on', 'style': 'form', 'explode': True }})
    modified_on_after: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_on.after', 'style': 'form', 'explode': True }})
    modified_on_before: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'modified_on.before', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    portfolios_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'portfolios.any', 'style': 'form', 'explode': True }})
    projects_all: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projects.all', 'style': 'form', 'explode': True }})
    projects_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projects.any', 'style': 'form', 'explode': True }})
    projects_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'projects.not', 'style': 'form', 'explode': True }})
    resource_subtype: Optional[shared_fields_enum1.FieldsEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'resource_subtype', 'style': 'form', 'explode': True }})
    sections_all: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sections.all', 'style': 'form', 'explode': True }})
    sections_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sections.any', 'style': 'form', 'explode': True }})
    sections_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sections.not', 'style': 'form', 'explode': True }})
    sort_ascending: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_ascending', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared_fields_enum2.FieldsEnum2] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    start_on: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_on', 'style': 'form', 'explode': True }})
    start_on_after: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_on.after', 'style': 'form', 'explode': True }})
    start_on_before: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'start_on.before', 'style': 'form', 'explode': True }})
    tags_all: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags.all', 'style': 'form', 'explode': True }})
    tags_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags.any', 'style': 'form', 'explode': True }})
    tags_not: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tags.not', 'style': 'form', 'explode': True }})
    teams_any: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'teams.any', 'style': 'form', 'explode': True }})
    text: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class SearchTasksForWorkspace200ApplicationJSON:
    data: Optional[list[shared_taskcompact.TaskCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class SearchTasksForWorkspaceRequest:
    path_params: SearchTasksForWorkspacePathParams = dataclasses.field()
    query_params: SearchTasksForWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class SearchTasksForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    search_tasks_for_workspace_200_application_json_object: Optional[SearchTasksForWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
