import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import tagresponse as shared_tagresponse
from ..shared import tagresponse as shared_tagresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class CreateTagForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTagForWorkspaceQueryParams:
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTagForWorkspaceRequestBodyInput:
    data: Optional[shared_tagresponse.TagResponseInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateTagForWorkspace201ApplicationJSON:
    data: Optional[shared_tagresponse.TagResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class CreateTagForWorkspaceRequest:
    path_params: CreateTagForWorkspacePathParams = dataclasses.field()
    query_params: CreateTagForWorkspaceQueryParams = dataclasses.field()
    request: CreateTagForWorkspaceRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateTagForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    create_tag_for_workspace_201_application_json_object: Optional[CreateTagForWorkspace201ApplicationJSON] = dataclasses.field(default=None)
    
