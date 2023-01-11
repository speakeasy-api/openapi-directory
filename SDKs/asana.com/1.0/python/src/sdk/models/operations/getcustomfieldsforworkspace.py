import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customfieldresponse as shared_customfieldresponse
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class GetCustomFieldsForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCustomFieldsForWorkspaceQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetCustomFieldsForWorkspace200ApplicationJSON:
    data: Optional[list[shared_customfieldresponse.CustomFieldResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class GetCustomFieldsForWorkspaceRequest:
    path_params: GetCustomFieldsForWorkspacePathParams = dataclasses.field()
    query_params: GetCustomFieldsForWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCustomFieldsForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    get_custom_fields_for_workspace_200_application_json_object: Optional[GetCustomFieldsForWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
