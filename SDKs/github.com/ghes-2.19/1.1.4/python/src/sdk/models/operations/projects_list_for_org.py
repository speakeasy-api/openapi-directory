import dataclasses
from typing import Optional
from enum import Enum
from ..shared import org_enum1 as shared_org_enum1
from ..shared import project as shared_project
from ..shared import validation_error_simple as shared_validation_error_simple


@dataclasses.dataclass
class ProjectsListForOrgPathParams:
    org: str = dataclasses.field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectsListForOrgQueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    state: Optional[shared_org_enum1.OrgEnum1] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProjectsListForOrgRequest:
    path_params: ProjectsListForOrgPathParams = dataclasses.field()
    query_params: ProjectsListForOrgQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListForOrgResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    validation_error_simple: Optional[shared_validation_error_simple.ValidationErrorSimple] = dataclasses.field(default=None)
    
