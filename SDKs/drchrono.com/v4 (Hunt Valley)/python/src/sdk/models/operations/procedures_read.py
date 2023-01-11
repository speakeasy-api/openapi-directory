import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import billinglineitem as shared_billinglineitem


@dataclasses.dataclass
class ProceduresReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProceduresReadQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    mu_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date', 'style': 'form', 'explode': True }})
    mu_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date_range', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    service_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProceduresReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ProceduresReadRequest:
    path_params: ProceduresReadPathParams = dataclasses.field()
    query_params: ProceduresReadQueryParams = dataclasses.field()
    security: ProceduresReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProceduresReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    billing_line_item: Optional[shared_billinglineitem.BillingLineItem] = dataclasses.field(default=None)
    
