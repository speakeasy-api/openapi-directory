import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import authorcomplete as shared_authorcomplete
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateAuthorDetailsPathParams:
    author_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'author_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateAuthorDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateAuthorDetailsRequest:
    path_params: PrivateAuthorDetailsPathParams = dataclasses.field()
    security: PrivateAuthorDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateAuthorDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    author_complete: Optional[shared_authorcomplete.AuthorComplete] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
