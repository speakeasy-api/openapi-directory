import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import projectprivate as shared_projectprivate

class PrivateProjectsListOrderEnum(str, Enum):
    PUBLISHED_DATE = "published_date"
    MODIFIED_DATE = "modified_date"
    VIEWS = "views"

class PrivateProjectsListOrderDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class PrivateProjectsListStorageEnum(str, Enum):
    GROUP = "group"
    INDIVIDUAL = "individual"


@dataclasses.dataclass
class PrivateProjectsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[PrivateProjectsListOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_direction: Optional[PrivateProjectsListOrderDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    roles: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'roles', 'style': 'form', 'explode': True }})
    storage: Optional[PrivateProjectsListStorageEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'storage', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrivateProjectsListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectsListRequest:
    query_params: PrivateProjectsListQueryParams = dataclasses.field()
    security: PrivateProjectsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    project_privates: Optional[list[shared_projectprivate.ProjectPrivate]] = dataclasses.field(default=None)
    
