import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import sortdirection_enum as shared_sortdirection_enum
from ..shared import role_enum as shared_role_enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import userdetailsadmin as shared_userdetailsadmin


@dataclasses.dataclass
class ListOrganizationUsersQueryParams:
    direction: Optional[shared_sortdirection_enum.SortDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    group: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    license_expiration_date: Optional[list[str]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'licenseExpirationDate', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next', 'style': 'form', 'explode': True }})
    no_active_license: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'noActiveLicense', 'style': 'form', 'explode': True }})
    only_ids: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'onlyIds', 'style': 'form', 'explode': True }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'previous', 'style': 'form', 'explode': True }})
    q: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[list[shared_role_enum.RoleEnum]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOrganizationUsersSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListOrganizationUsersRequest:
    query_params: ListOrganizationUsersQueryParams = dataclasses.field()
    security: ListOrganizationUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListOrganizationUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    user_details_admins: Optional[list[shared_userdetailsadmin.UserDetailsAdmin]] = dataclasses.field(default=None)
    
