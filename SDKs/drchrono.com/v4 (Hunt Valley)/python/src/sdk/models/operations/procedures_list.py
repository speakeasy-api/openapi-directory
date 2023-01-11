import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import billinglineitem as shared_billinglineitem


@dataclasses.dataclass
class ProceduresListQueryParams:
    appointment: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'appointment', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    mu_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date', 'style': 'form', 'explode': True }})
    mu_date_range: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mu_date_range', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    service_date: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'service_date', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ProceduresListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class ProceduresList200ApplicationJSON:
    r"""ProceduresList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_billinglineitem.BillingLineItem]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class ProceduresListRequest:
    query_params: ProceduresListQueryParams = dataclasses.field()
    security: ProceduresListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ProceduresListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    procedures_list_200_application_json_object: Optional[ProceduresList200ApplicationJSON] = dataclasses.field(default=None)
    
