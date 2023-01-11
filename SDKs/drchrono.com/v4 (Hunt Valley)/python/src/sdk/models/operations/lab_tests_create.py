import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import labtest as shared_labtest


@dataclasses.dataclass
class LabTestsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    order: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabTestsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabTestsCreateRequest:
    query_params: LabTestsCreateQueryParams = dataclasses.field()
    security: LabTestsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabTestsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_test: Optional[shared_labtest.LabTest] = dataclasses.field(default=None)
    
