import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import classdetails as shared_classdetails
from ..shared import flaterrorresponse as shared_flaterrorresponse

class ListClassesStateEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"


@dataclasses.dataclass
class ListClassesQueryParams:
    state: Optional[ListClassesStateEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListClassesSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListClassesRequest:
    query_params: ListClassesQueryParams = dataclasses.field()
    security: ListClassesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListClassesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    class_details: Optional[list[shared_classdetails.ClassDetails]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
