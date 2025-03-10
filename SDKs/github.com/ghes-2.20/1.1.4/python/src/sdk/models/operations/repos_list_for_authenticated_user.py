"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import basic_error as shared_basic_error
from ..shared import repository as shared_repository
from ..shared import validation_error as shared_validation_error
from datetime import datetime
from enum import Enum
from typing import Optional

class ReposListForAuthenticatedUserDirectionEnum(str, Enum):
    r"""Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`"""
    ASC = 'asc'
    DESC = 'desc'

class ReposListForAuthenticatedUserSortEnum(str, Enum):
    r"""Can be one of `created`, `updated`, `pushed`, `full_name`."""
    CREATED = 'created'
    UPDATED = 'updated'
    PUSHED = 'pushed'
    FULL_NAME = 'full_name'

class ReposListForAuthenticatedUserTypeEnum(str, Enum):
    r"""Can be one of `all`, `owner`, `public`, `private`, `member`. Note: For GitHub AE, can be one of `all`, `owner`, `internal`, `private`, `member`. Default: `all`
      
    Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
    """
    ALL = 'all'
    OWNER = 'owner'
    PUBLIC = 'public'
    PRIVATE = 'private'
    MEMBER = 'member'

class ReposListForAuthenticatedUserVisibilityEnum(str, Enum):
    r"""Can be one of `all`, `public`, or `private`. Note: For GitHub AE, can be one of `all`, `internal`, or `private`."""
    ALL = 'all'
    PUBLIC = 'public'
    PRIVATE = 'private'


@dataclasses.dataclass
class ReposListForAuthenticatedUserRequest:
    
    affiliation: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'affiliation', 'style': 'form', 'explode': True }})
    r"""Comma-separated list of values. Can include:
    \* `owner`: Repositories that are owned by the authenticated user.  
    \* `collaborator`: Repositories that the user has been added to as a collaborator.  
    \* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
    """  
    before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'before', 'style': 'form', 'explode': True }})
    r"""Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`."""  
    direction: Optional[ReposListForAuthenticatedUserDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    r"""Can be one of `asc` or `desc`. Default: `asc` when using `full_name`, otherwise `desc`"""  
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    r"""Page number of the results to fetch."""  
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    r"""Results per page (max 100)"""  
    since: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    r"""Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`."""  
    sort: Optional[ReposListForAuthenticatedUserSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    r"""Can be one of `created`, `updated`, `pushed`, `full_name`."""  
    type: Optional[ReposListForAuthenticatedUserTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    r"""Can be one of `all`, `owner`, `public`, `private`, `member`. Note: For GitHub AE, can be one of `all`, `owner`, `internal`, `private`, `member`. Default: `all`
      
    Will cause a `422` error if used in the same request as **visibility** or **affiliation**. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
    """  
    visibility: Optional[ReposListForAuthenticatedUserVisibilityEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'visibility', 'style': 'form', 'explode': True }})
    r"""Can be one of `all`, `public`, or `private`. Note: For GitHub AE, can be one of `all`, `internal`, or `private`."""  
    

@dataclasses.dataclass
class ReposListForAuthenticatedUserResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    basic_error: Optional[shared_basic_error.BasicError] = dataclasses.field(default=None)
    r"""Requires authentication"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    repositories: Optional[list[shared_repository.Repository]] = dataclasses.field(default=None)
    r"""Response"""  
    validation_error: Optional[shared_validation_error.ValidationError] = dataclasses.field(default=None)
    r"""Validation failed"""  
    