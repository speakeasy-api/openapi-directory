import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import project as shared_project

class ProjectsListOrderEnum(str, Enum):
    PUBLISHED_DATE = "published_date"
    MODIFIED_DATE = "modified_date"
    VIEWS = "views"

class ProjectsListOrderDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class ProjectsListQueryParams:
    group: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    institution: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'institution', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[ProjectsListOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_direction: Optional[ProjectsListOrderDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    published_since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'published_since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProjectsListRequest:
    query_params: ProjectsListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    projects: Optional[list[shared_project.Project]] = dataclasses.field(default=None)
    
