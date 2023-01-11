import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class OfficesUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OfficesUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class OfficesUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OfficesUpdateRequest:
    path_params: OfficesUpdatePathParams = dataclasses.field()
    query_params: OfficesUpdateQueryParams = dataclasses.field()
    security: OfficesUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OfficesUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
