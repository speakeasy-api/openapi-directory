"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import team_project as shared_team_project
from typing import Optional


@dataclasses.dataclass
class TeamsCheckPermissionsForProjectInOrgRequest:
    
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    r"""The organization name. The name is not case sensitive."""  
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier of the project."""  
    team_slug: str = dataclasses.field(metadata={'path_param': { 'field_name': 'team_slug', 'style': 'simple', 'explode': False }})
    r"""The slug of the team name."""  
    

@dataclasses.dataclass
class TeamsCheckPermissionsForProjectInOrgResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    team_project: Optional[shared_team_project.TeamProject] = dataclasses.field(default=None)
    r"""Response"""  
    