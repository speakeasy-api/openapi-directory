import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import workspace_path_gid_enum as shared_workspace_path_gid_enum
from ..shared import asananamedresource as shared_asananamedresource
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class TypeaheadForWorkspacePathParams:
    workspace_gid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TypeaheadForWorkspaceQueryParams:
    resource_type: shared_workspace_path_gid_enum.WorkspacePathGidEnum = dataclasses.field(metadata={'query_param': { 'field_name': 'resource_type', 'style': 'form', 'explode': True }})
    count: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    opt_fields: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    type: Optional[shared_workspace_path_gid_enum.WorkspacePathGidEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class TypeaheadForWorkspace200ApplicationJSON:
    r"""TypeaheadForWorkspace200ApplicationJSON
    A generic list of objects, such as those returned by the typeahead search endpoint.
    """
    
    data: Optional[list[shared_asananamedresource.AsanaNamedResource]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclasses.dataclass
class TypeaheadForWorkspaceRequest:
    path_params: TypeaheadForWorkspacePathParams = dataclasses.field()
    query_params: TypeaheadForWorkspaceQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TypeaheadForWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    typeahead_for_workspace_200_application_json_object: Optional[TypeaheadForWorkspace200ApplicationJSON] = dataclasses.field(default=None)
    
