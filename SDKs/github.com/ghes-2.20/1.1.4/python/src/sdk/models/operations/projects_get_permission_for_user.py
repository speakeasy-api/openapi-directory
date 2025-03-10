"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import repository_collaborator_permission as shared_repository_collaborator_permission
from ..shared import validation_error as shared_validation_error
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Optional


@dataclasses.dataclass
class ProjectsGetPermissionForUserRequest:
    
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})  
    username: str = dataclasses.field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class ProjectsGetPermissionForUser415ApplicationJSON:
    r"""Preview header missing"""
    
    documentation_url: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('documentation_url') }})  
    message: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('message') }})  
    

@dataclasses.dataclass
class ProjectsGetPermissionForUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Requires authentication"""  
    projects_get_permission_for_user_415_application_json_object: Optional[ProjectsGetPermissionForUser415ApplicationJSON] = dataclasses.field(default=None)
    r"""Preview header missing"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    repository_collaborator_permission: Optional[shared_repository_collaborator_permission.RepositoryCollaboratorPermission] = dataclasses.field(default=None)
    r"""Response"""  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed"""  
    