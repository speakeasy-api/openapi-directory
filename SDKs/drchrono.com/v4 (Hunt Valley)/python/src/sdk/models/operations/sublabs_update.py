import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from ..shared import security as shared_security


@dataclasses.dataclass
class SublabsUpdatePathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SublabsUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class SublabsUpdateRequest:
    path_params: SublabsUpdatePathParams = dataclasses.field()
    security: SublabsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class SublabsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
