import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import laborder as shared_laborder


@dataclasses.dataclass
class LabOrdersSummaryReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LabOrdersSummaryReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    patient: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'patient', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabOrdersSummaryReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabOrdersSummaryReadRequest:
    path_params: LabOrdersSummaryReadPathParams = dataclasses.field()
    query_params: LabOrdersSummaryReadQueryParams = dataclasses.field()
    security: LabOrdersSummaryReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabOrdersSummaryReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_order: Optional[shared_laborder.LabOrder] = dataclasses.field(default=None)
    
