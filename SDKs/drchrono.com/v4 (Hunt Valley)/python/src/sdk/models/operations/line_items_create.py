import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import billinglineitem as shared_billinglineitem


@dataclasses.dataclass
class LineItemsCreateQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    posted_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'posted_date', 'style': 'form', 'explode': True }})
    service_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service_date', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LineItemsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LineItemsCreateRequest:
    query_params: LineItemsCreateQueryParams = dataclasses.field()
    security: LineItemsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LineItemsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    billing_line_item: Optional[shared_billinglineitem.BillingLineItem] = dataclasses.field(default=None)
    
