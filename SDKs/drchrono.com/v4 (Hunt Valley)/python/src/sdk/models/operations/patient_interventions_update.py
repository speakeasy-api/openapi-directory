import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PatientInterventionsUpdatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientInterventionsUpdateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientInterventionsUpdateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientInterventionsUpdateRequest:
    path_params: PatientInterventionsUpdatePathParams = dataclasses.field()
    query_params: PatientInterventionsUpdateQueryParams = dataclasses.field()
    security: PatientInterventionsUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientInterventionsUpdateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
