import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import cashpayment as shared_cashpayment


@dataclasses.dataclass
class PatientPaymentsListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPaymentsListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PatientPaymentsList200ApplicationJSON:
    r"""PatientPaymentsList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_cashpayment.CashPayment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PatientPaymentsListRequest:
    query_params: PatientPaymentsListQueryParams = dataclasses.field()
    security: PatientPaymentsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPaymentsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_payments_list_200_application_json_object: Optional[PatientPaymentsList200ApplicationJSON] = dataclasses.field(default=None)
    
