import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import laborderdocument as shared_laborderdocument


@dataclasses.dataclass
class LabDocumentsCreateQueryParams:
    doctor: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'doctor', 'style': 'form', 'explode': True }})
    since: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'since', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LabDocumentsCreateSecurity:
    drchrono_oauth2: shared_security.SchemeDrchronoOauth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class LabDocumentsCreateRequest:
    query_params: LabDocumentsCreateQueryParams = dataclasses.field()
    security: LabDocumentsCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class LabDocumentsCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lab_order_document: Optional[shared_laborderdocument.LabOrderDocument] = dataclasses.field(default=None)
    
