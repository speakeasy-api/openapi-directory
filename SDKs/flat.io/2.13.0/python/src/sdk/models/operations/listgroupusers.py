import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import userpublic as shared_userpublic


@dataclasses.dataclass
class ListGroupUsersPathParams:
    group: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    
class ListGroupUsersSourceEnum(str, Enum):
    GOOGLE_CLASSROOM = "googleClassroom"
    MICROSOFT_GRAPH = "microsoftGraph"
    CLEVER = "clever"


@dataclasses.dataclass
class ListGroupUsersQueryParams:
    source: Optional[ListGroupUsersSourceEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListGroupUsersSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListGroupUsersRequest:
    path_params: ListGroupUsersPathParams = dataclasses.field()
    query_params: ListGroupUsersQueryParams = dataclasses.field()
    security: ListGroupUsersSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListGroupUsersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    user_publics: Optional[list[shared_userpublic.UserPublic]] = dataclasses.field(default=None)
    
