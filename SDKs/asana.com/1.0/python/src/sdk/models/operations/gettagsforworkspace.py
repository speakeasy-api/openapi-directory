import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagcompact as shared_tagcompact
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetTagsForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagsForWorkspaceQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetTagsForWorkspace200ApplicationJSON:
    data: Optional[list[shared_tagcompact.TagCompact]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetTagsForWorkspaceRequest:
    path_params: GetTagsForWorkspacePathParams = dataclasses.field()
    query_params: GetTagsForWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagsForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_tags_for_workspace_200_application_json_object: Optional[GetTagsForWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
