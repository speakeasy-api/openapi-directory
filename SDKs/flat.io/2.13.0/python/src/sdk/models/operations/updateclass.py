import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import classupdate as shared_classupdate
from ..shared import classdetails as shared_classdetails
from ..shared import flaterrorresponse as shared_flaterrorresponse


@dataclasses.dataclass
class UpdateClassPathParams:
    class_: str = dataclasses.field(metadata={'path_param': { 'field_name': 'class', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateClassSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class UpdateClassRequest:
    path_params: UpdateClassPathParams = dataclasses.field()
    security: UpdateClassSecurity = dataclasses.field()
    request: Optional[shared_classupdate.ClassUpdate] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    class_details: Optional[shared_classdetails.ClassDetails] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
