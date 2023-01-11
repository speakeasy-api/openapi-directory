import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import basic_error as shared_basic_error
from ..shared import repository as shared_repository
from ..shared import validation_error as shared_validation_error

class ReposListForAuthenticatedUserDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class ReposListForAuthenticatedUserSortEnum(str, Enum):
    CREATED = "created"
    UPDATED = "updated"
    PUSHED = "pushed"
    FULL_NAME = "full_name"

class ReposListForAuthenticatedUserTypeEnum(str, Enum):
    ALL = "all"
    OWNER = "owner"
    PUBLIC = "public"
    PRIVATE = "private"
    MEMBER = "member"

class ReposListForAuthenticatedUserVisibilityEnum(str, Enum):
    ALL = "all"
    PUBLIC = "public"
    PRIVATE = "private"


@dataclasses.dataclass
class ReposListForAuthenticatedUserQueryParams:
    affiliation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    before: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    direction: Optional[ReposListForAuthenticatedUserDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    sort: Optional[ReposListForAuthenticatedUserSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[ReposListForAuthenticatedUserTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    visibility: Optional[ReposListForAuthenticatedUserVisibilityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ReposListForAuthenticatedUserRequest:
    query_params: ReposListForAuthenticatedUserQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ReposListForAuthenticatedUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    repositories: Optional[list[shared_repository.Repository]] = dataclasses.field(default=None)
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    
