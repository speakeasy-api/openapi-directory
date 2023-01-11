import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class ConsentFormsUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConsentFormsUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ConsentFormsUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ConsentFormsUpdateRequest:
    path_params: ConsentFormsUpdatePathParams = dataclasses.field()
    query_params: ConsentFormsUpdateQueryParams = dataclasses.field()
    security: ConsentFormsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ConsentFormsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
