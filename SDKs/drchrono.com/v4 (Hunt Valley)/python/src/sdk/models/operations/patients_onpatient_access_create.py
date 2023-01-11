import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import patient as shared_patient


@dataclasses.dataclass
class PatientsOnpatientAccessCreatePathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatientsOnpatientAccessCreateQueryParams:
    chart_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'chart_id', 'style': 'form', 'explode': True }})
    date_of_birth: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'date_of_birth', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    ethnicity: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ethnicity', 'style': 'form', 'explode': True }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'first_name', 'style': 'form', 'explode': True }})
    gender: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'gender', 'style': 'form', 'explode': True }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'last_name', 'style': 'form', 'explode': True }})
    preferred_language: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preferred_language', 'style': 'form', 'explode': True }})
    race: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'race', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientsOnpatientAccessCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PatientsOnpatientAccessCreateRequest:
    path_params: PatientsOnpatientAccessCreatePathParams = dataclasses.field()
    query_params: PatientsOnpatientAccessCreateQueryParams = dataclasses.field()
    security: PatientsOnpatientAccessCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientsOnpatientAccessCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient: Optional[shared_patient.Patient] = dataclasses.field(default=None)
    
