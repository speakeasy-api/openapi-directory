import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import laborder as shared_laborder


@dataclasses.dataclass
class LabOrdersReadPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LabOrdersReadQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabOrdersReadSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabOrdersReadRequest:
    path_params: LabOrdersReadPathParams = dataclasses.field()
    query_params: LabOrdersReadQueryParams = dataclasses.field()
    security: LabOrdersReadSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabOrdersReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_order: Optional[shared_laborder.LabOrder] = dataclasses.field(default=None)
    
