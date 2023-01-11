import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class RemoveOrganizationUserPathParams:
    user: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveOrganizationUserQueryParams:
    convert_to_individual: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'convertToIndividual', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class RemoveOrganizationUserSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class RemoveOrganizationUserRequest:
    path_params: RemoveOrganizationUserPathParams = dataclasses.field()
    query_params: RemoveOrganizationUserQueryParams = dataclasses.field()
    security: RemoveOrganizationUserSecurity = dataclasses.field()
    

@dataclasses.dataclass
class RemoveOrganizationUserResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
