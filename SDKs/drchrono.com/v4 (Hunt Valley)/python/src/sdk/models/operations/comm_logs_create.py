import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import phonecalllog as shared_phonecalllog


@dataclasses.dataclass
class CommLogsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CommLogsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class CommLogsCreateRequest:
    query_params: CommLogsCreateQueryParams = dataclasses.field()
    security: CommLogsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class CommLogsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    phone_call_log: Optional[shared_phonecalllog.PhoneCallLog] = dataclasses.field(default=None)
    
