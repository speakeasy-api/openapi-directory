import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import labresult as shared_labresult


@dataclasses.dataclass
class LabResultsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabResultsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabResultsCreateRequest:
    query_params: LabResultsCreateQueryParams = dataclasses.field()
    security: LabResultsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabResultsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_result: Optional[shared_labresult.LabResult] = dataclasses.field(default=None)
    
