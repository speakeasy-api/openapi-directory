import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import coverage as shared_coverage


@dataclasses.dataclass
class EligibilityChecksReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class EligibilityChecksReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    appointment_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment_date', 'style': 'form', 'explode': True }})
    appointment_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment_date_range', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    query_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query_date', 'style': 'form', 'explode': True }})
    query_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query_date_range', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class EligibilityChecksReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class EligibilityChecksReadRequest:
    path_params: EligibilityChecksReadPathParams = dataclasses.field()
    query_params: EligibilityChecksReadQueryParams = dataclasses.field()
    security: EligibilityChecksReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class EligibilityChecksReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    coverage: Optional[shared_coverage.Coverage] = dataclasses.field(default=None)
    
