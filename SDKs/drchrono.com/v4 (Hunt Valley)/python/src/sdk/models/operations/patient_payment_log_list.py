import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import cashpaymentlog as shared_cashpaymentlog


@dataclasses.dataclass
class PatientPaymentLogListQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    office: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'office', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatientPaymentLogListSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclasses.dataclass
class PatientPaymentLogList200ApplicationJSON:
    r"""PatientPaymentLogList200ApplicationJSON
    Paginated Result
    """
    
    data: Optional[list[shared_cashpaymentlog.CashPaymentLog]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclasses.dataclass
class PatientPaymentLogListRequest:
    query_params: PatientPaymentLogListQueryParams = dataclasses.field()
    security: PatientPaymentLogListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PatientPaymentLogListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    patient_payment_log_list_200_application_json_object: Optional[PatientPaymentLogList200ApplicationJSON] = dataclasses.field(default=None)
    
