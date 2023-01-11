import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import flaterrorresponse as shared_flaterrorresponse
from ..shared import groupdetails as shared_groupdetails


@dataclasses.dataclass
class GetGroupDetailsPathParams:
    group: str = dataclasses.field(metadata={'path_param': { 'field_name': 'group', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetGroupDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetGroupDetailsRequest:
    path_params: GetGroupDetailsPathParams = dataclasses.field()
    security: GetGroupDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetGroupDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    group_details: Optional[shared_groupdetails.GroupDetails] = dataclasses.field(default=None)
    
